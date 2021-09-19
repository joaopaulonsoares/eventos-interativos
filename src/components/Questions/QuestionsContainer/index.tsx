/* eslint-disable no-unused-vars */
import React, { FormEvent, useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import ScrollableFeed from 'react-scrollable-feed';
import toast from 'react-hot-toast';
import { ChatContainerDiv } from './styles';
import { QuestionItem } from '../QuestionItem/index';

import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';
import { useRoom } from '../../../hooks/useRoom';

interface QuestionContainerProps {
  eventId: string;
}

export function QuestionContainer({ eventId }: QuestionContainerProps) {
  const { user } = useAuth();
  const [newUserQuestion, setNewUserQuestion] = useState('');
  const { questions } = useRoom(eventId);

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
