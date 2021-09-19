/* eslint-disable no-unused-vars */
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type FirebaseQuestionsType = Record<string, {
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
  userVoteId: string | undefined;
};

export function useRoom(eventId: string) {
  const { user } = useAuth();
  // const [roomTitle, setRoomTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionType[]>([]);

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
        userVoteId: Object.entries(value.votes ?? {}).find(
          ([voteKey, vote]) => vote.authorId === user?.id,
        )?.[0],
      }));
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off('value');
    };
  }, [eventId, user?.id]);

  return { questions };
}
