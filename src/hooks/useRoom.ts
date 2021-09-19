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

type FirebaseChatType = Record<string, {
  authorUser: {
    avatar: string;
    name: string;
  };
  message: string;
  timestamp: Date;
}>;

type FirebaseRoomInfoType = {
  title: string;
  authorID: string;
  youtubeLiveVideoId: string;
  scheduleDate: Date;
  type: string;
  description: string;
  status: 'Agendado' | 'Em andamento' | 'Encerrado' | 'Cancelado';
  closedOn: Date | null,
}

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

type MessageChatType = {
  id: string;
  authorUser: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
};

type RoomInfoType = {
  title: string;
  authorID: string;
  youtubeLiveVideoId: string;
  scheduleDate: string;
  type: string;
  description: string;
  status: 'Agendado' | 'Em andamento' | 'Encerrado' | 'Cancelado' | 'Erro';
  closedOn: Date | null,
}

export function useRoom(eventId: string) {
  const { user } = useAuth();
  const [roomInfo, setRoomInfo] = useState<RoomInfoType>();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [chatMessages, setChatMessages] = useState<MessageChatType[]>([]);

  useEffect(() => {
    const roomInfoRef = database.ref(`events/${eventId}/info`);
    roomInfoRef.on('value', (events) => {
      const roomInfoEvents = events.val();
      const firebaseRoomInfo: FirebaseRoomInfoType = roomInfoEvents ?? {};
      const roomInfoData = Object.values(firebaseRoomInfo)[0];
      /*
      const roomInfoParse = {
        title: roomInfoData?.title ?? '-',
        authorID: roomInfoData?.authorID ?? '-',
        youtubeLiveVideoId: roomInfoData?.youtubeLiveVideoId ?? '-',
        scheduleDate: (`${format(new Date(), 'dd/MM/yyyy, HH:mm')}`) ?? '-',
        type: roomInfoData?.type ?? '-',
        description: roomInfoData?.description ?? '-',
        status: roomInfoData?.status ?? 'Erro',
        closedOn: roomInfoData?.closedOn ?? null,
      };

      setRoomInfo(roomInfoParse);
      */
    });

    const roomQuestionsRef = database.ref(`events/${eventId}/questions`);
    roomQuestionsRef.on('value', (events) => {
      const databaseQuestionEvents = events.val();
      const firebaseQuestions: FirebaseQuestionsType = databaseQuestionEvents ?? {};
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

    const roomChatRef = database.ref(`events/${eventId}/chat`);
    roomChatRef.on('value', (events) => {
      const databaseChatEvents = events.val();
      const firebaseChatMessages: FirebaseChatType = databaseChatEvents ?? {};
      const parsedMessages = Object.entries(firebaseChatMessages).map(([key, value]) => ({
        id: key,
        message: value.message,
        authorUser: value.authorUser,
        timestamp: (`${format(new Date(value.timestamp), 'dd/MM/yyyy, HH:mm')}`),
      }));
      setChatMessages(parsedMessages);
    });

    return () => {
      roomQuestionsRef.off('value');
      roomChatRef.off('value');
      roomInfoRef.off('value');
    };
  }, [eventId, user?.id]);

  return { roomInfo, questions, chatMessages };
}
