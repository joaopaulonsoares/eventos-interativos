/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React, { FormEvent, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ScrollableFeed from 'react-scrollable-feed';
import toast from 'react-hot-toast';
import { ChatContainerDiv } from './styles';
import { QuestionItem } from '../QuestionItem/index';

import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';
import { useRoom } from '../../../hooks/useRoom';
import { TextAreaOfQuestionChat } from '../../TextAreaOfQuestionChat';

interface QuestionContainerProps {
  eventId: string;
  eventStatus: string;
}

export function QuestionContainer({ eventId, eventStatus }: QuestionContainerProps) {
  const { user } = useAuth();
  const [newUserQuestion, setNewUserQuestion] = useState('');
  const { questions } = useRoom(eventId);
  const [status, setStatus] = useState(eventStatus);

  useEffect(() => {
    setStatus(eventStatus);
  }, [eventStatus]);

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
        Perguntas
      </span>
      <div className="questionsArea">
        {questions ? (
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
                userVoteId={question?.userVoteId}
              />
            ))}
          </ScrollableFeed>
        ) : (
          <Skeleton count={3} height={100} />
        )}
      </div>
      <div className="questionInputArea">
        {
          (status === 'Em andamento' || status === 'Agendado') ? (
            <TextAreaOfQuestionChat
              id="questionTextAreInput"
              placeHolder="Escreva aqui a sua pergunta ..."
              maxCharacters={400}
              fieldValue={newUserQuestion}
              handleSendFunction={handleSendQuestion}
              handleInputChange={handleInputChange}
              userIsNotLoggedIn={!user}
            />
          ) : (
            <div className="eventFinishedMessage">
              Evento encerrado para participações.
            </div>
          )
        }
      </div>
    </ChatContainerDiv>
  );
}
