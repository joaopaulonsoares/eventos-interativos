import React from 'react';
import { Avatar, Icon } from '@chakra-ui/react';
import { AiOutlineLike } from 'react-icons/ai';

import toast from 'react-hot-toast';
import { QuestionBox } from './style';
import { database } from '../../../services/firebase';
import { useAuth } from '../../../hooks/useAuth';

interface AuthorUserInterface {
  name: string;
  avatar?: string | undefined;
}

interface QuestionInterface {
  id: string,
  authorUser: AuthorUserInterface;
  question: string;
  timestamp: string;
  votesCount: number;
  userVoteId: string | undefined;
  eventId: string;
  eventStatus: string;
}

export function QuestionItem({
  id, authorUser, question, timestamp, eventId, userVoteId, votesCount, eventStatus,
}: QuestionInterface) {
  const { user } = useAuth();

  async function handleQuestionVote(questionId: string, userVotedId: string | undefined) {
    if (eventStatus === 'Em andamento' || eventStatus === 'Agendado') {
      try {
        if (userVotedId) {
          // Remove like that exists
          await database.ref(`events/${eventId}/questions/${questionId}/votes/${userVotedId}`).remove();
          toast.success('Voto removido com sucesso!', { position: 'top-left' });
        } else {
          // Create a like
          await database.ref(`events/${eventId}/questions/${questionId}/votes`).push({
            authorId: user?.id,
          });
          toast.success('Voto na pergunta computado com sucesso!', { position: 'top-left' });
        }
      } catch (e) {
        toast.success('Erro ao computar voto.Tente novamente', { position: 'top-left' });
      }
    } else {
      toast.error('As participações no evento já se encerraram!', { position: 'top-left' });
    }
  }

  return (
    <QuestionBox userVoteId={userVoteId}>
      <div className="messageContent">
        <p>
          <span className="userMessage">{question}</span>
        </p>

        <div className="questionFooter">
          <div className="userInfo">
            <div className="avatar">
              <Avatar size="sm" name={authorUser.name} src={authorUser.avatar} />
            </div>
            <div>
              <p className="userName">{authorUser.name}</p>
              <p className="questionInfo">{timestamp}</p>
            </div>
          </div>

          <div className="vote">
            <button
              type="button"
              onClick={() => handleQuestionVote(id, userVoteId)}
              aria-label="Votar na questão"
            >
              <span>{votesCount}</span>
              <Icon as={AiOutlineLike} />
            </button>

          </div>
        </div>
      </div>
    </QuestionBox>
  );
}
