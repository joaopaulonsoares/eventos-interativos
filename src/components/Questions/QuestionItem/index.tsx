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
  hasVoted: boolean;
  eventId: string;
}

export function QuestionItem({
  id, authorUser, question, timestamp, eventId, hasVoted, votesCount,
}: QuestionInterface) {
  const { user } = useAuth();

  async function handleQuestionVote(questionId: string) {
    try {
      await database.ref(`events/${eventId}/questions/${questionId}/votes`).push({
        authorId: user?.id,
      });
      toast.success('Voto computado com sucesso na pergunta!', { position: 'top-left' });
      // useToast('Voto computado com sucesso na pergunta!', 'success', 'top-left');
    } catch (e) {
      toast.success('Erro ao computar voto.Tente novamente', { position: 'top-left' });
    }
  }

  return (
    <QuestionBox hasVoted={hasVoted}>
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
              onClick={() => handleQuestionVote(id)}
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
