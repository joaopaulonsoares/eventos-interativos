/* eslint-disable react/jsx-no-bind */
import React, { FormEvent, useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import ScrollableFeed from 'react-scrollable-feed';
import Skeleton from 'react-loading-skeleton';
import { ChatContainerDiv } from './styles';
import { ChatItem } from '../ChatItem/index';
import { TextAreaOfQuestionChat } from '../../TextAreaOfQuestionChat/index';

import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';
import { useRoom } from '../../../hooks/useRoom';

interface ChatContainerProps {
  eventId: string;
  eventStatus: string;
}

export function ChatContainer({ eventId, eventStatus }: ChatContainerProps) {
  const { user } = useAuth();
  const { chatMessages } = useRoom(eventId);
  const [userMessage, setUserMessage] = useState('');
  const [showChat, setShowChat] = useState(true);
  const [status, setStatus] = useState(eventStatus);

  useEffect(() => {
    setStatus(eventStatus);
  }, [eventStatus]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(event.currentTarget.value);
  };

  async function handleSendChat(event: FormEvent) {
    event.preventDefault();
    if (userMessage.trim() === '') {
      return;
    }

    if (!user) {
      toast.error('O usuário não está logado!', { position: 'top-center' });
    }

    const chatMessage = {
      message: userMessage,
      authorUser: {
        name: user?.name,
        avatar: user?.avatar,
      },
      timestamp: Date.now(),
    };

    try {
      await database.ref(`events/${eventId}/chat`).push(chatMessage);
      toast.success('Mensagem enviada com sucesso!', { position: 'bottom-right' });
      setUserMessage('');
    } catch (e) {
      toast.error('Erro ao enviar pergunta. Tente novamente!');
    }
  }

  const handleShowChatChange = () => {
    setShowChat(!showChat);
  };

  return (
    <ChatContainerDiv>
      <div className="sectionHeader">
        <span className="sectionTitle">Chat</span>
        {showChat ? (
          <button type="button" aria-label="Ocultar Chat" title="Ocultar Chat" onClick={() => handleShowChatChange()}>
            <AiFillEyeInvisible size={30} />
          </button>
        ) : (
          <button type="button" aria-label="Ver Chat" title="Ver Chat" onClick={() => handleShowChatChange()}>
            <AiFillEye size={30} />
          </button>
        )}
      </div>
      <div className="chatMessages">
        {chatMessages ? (
          <>
            {showChat ? (
              <ScrollableFeed className="chatFeed">
                {chatMessages.map((message) => (
                  <ChatItem
                    key={message.id}
                    id={message.id}
                    authorUser={message.authorUser}
                    timestamp={message.timestamp}
                    message={message.message}
                  />
                ))}
              </ScrollableFeed>
            ) : (
              <div className="hideChatMessages">
                <p>Chat ocultado!</p>
                <p> Para visualizar novamente clique no botão acima.</p>
              </div>
            )}
          </>
        ) : (
          <Skeleton count={3} height={100} />
        )}
      </div>
      <div className="chatInputArea">
        {
          (status === 'Em andamento' || status === 'Agendado') ? (
            <TextAreaOfQuestionChat
              id="chatTextAreInput"
              placeHolder="Escreva aqui a sua mensagem ..."
              maxCharacters={240}
              fieldValue={userMessage}
              handleSendFunction={handleSendChat}
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
