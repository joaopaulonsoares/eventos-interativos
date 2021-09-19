import React, { FormEvent, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FaPaperPlane } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import ScrollableFeed from 'react-scrollable-feed';
import toast from 'react-hot-toast';
import { ChatContainerDiv } from './styles';
import { QuestionItem } from '../QuestionItem/index';

import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';

interface QuestionContainerProps {
  eventId: string;
}

type FirebaseQuestionsType = Record<
  string,
  {
    authorUser: {
      name: string;
      avatar: string;
    };
    question: string;
    timestamp: Date;
    id: string;
    votes: Record<string, {
      authorId: string,
    }>;
  }
>;

type QuestionType = {
  id: string;
  authorUser: {
    name: string;
    avatar: string;
  };
  question: string;
  timestamp: string;
  votesCount: number;
  hasVoted: boolean;
};

export function QuestionContainer({ eventId }: QuestionContainerProps) {
  const [newUserQuestion, setNewUserQuestion] = useState('');
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [fetchingQuestions, setFetchingQuestions] = useState(true);

  useEffect(() => {
    const roomRef = database.ref(`events/${eventId}/questions`);

    roomRef.on('value', (events) => {
      const databaseEvents = events.val();
      const firebaseQuestions: FirebaseQuestionsType = databaseEvents ?? {};
      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => ({
        id: key,
        question: value.question,
        authorUser: value.authorUser,
        timestamp: (`${format(new Date(value.timestamp), 'dd/MM/yyyy, HH:mm')}`),
        votesCount: Object.values(value.votes ?? {}).length,
        hasVoted: Object.values(value.votes ?? {}).some((vote) => vote.authorId === user?.id),
      }));
      setQuestions(parsedQuestions);
      setFetchingQuestions(false);
    });

    return () => {
      roomRef.off('value');
    };
  }, [eventId, user?.id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewUserQuestion(event.currentTarget.value);
  };

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newUserQuestion.trim() === '') {
      return;
    }

    if (!user) {
      toast.error('O usuário não está logado!', { position: 'top-center' });
    }

    const question = {
      question: newUserQuestion,
      authorUser: {
        name: user?.name,
        avatar: user?.avatar,
      },
      timestamp: Date.now(),
    };

    try {
      await database.ref(`events/${eventId}/questions`).push(question);
      toast.success('Pergunta enviada com sucesso!', { position: 'bottom-left' });
      setNewUserQuestion('');
    } catch (e) {
      toast.error('Erro ao enviar pergunta. Tente novamente!');
    }
  }

  return (
    <ChatContainerDiv>
      <span className="sectionTitle">
        Perguntas (
        {eventId}
        )
      </span>
      <div className="questionsArea">
        {!fetchingQuestions ? (
          <ScrollableFeed className="questionsFeed">
            {questions.map((question) => (
              <QuestionItem
                key={`${question.id}`}
                authorUser={question.authorUser}
                timestamp={question.timestamp}
                question={question.question}
                eventId={eventId}
                id={question.id}
                votesCount={question.votesCount}
                hasVoted={question.hasVoted}
              />
            ))}
          </ScrollableFeed>
        ) : (
          <Skeleton count={3} height={100} />
        )}
      </div>
      <div className="questionInputArea">
        {user ? (
          <>
            <textarea
              id="messageInput"
              name="w3review"
              rows={4}
              cols={50}
              placeholder="Escreva aqui a sua pergunta ..."
              onChange={handleInputChange}
              maxLength={400}
              value={newUserQuestion}
            />
            <div className="actionArea">
              <div className="visualDiv" />
              <div className="buttonDiv">
                <span>
                  {newUserQuestion.length}
                  /400
                </span>
                <button type="button" onClick={handleSendQuestion} disabled={!user}>
                  <FaPaperPlane color="white" fontSize="1.2rem" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>Faça Login para enviar uma pergunta.</div>
        )}
      </div>
    </ChatContainerDiv>
  );
}
