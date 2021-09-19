import React, { FormEvent, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { ChatContainerDiv } from './styles';
import { ChatItem } from '../ChatItem/index';

import { messageArrayMock } from './mock';
import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';

interface ChatContainerProps {
  eventId: string;
}

export function ChatContainer({ eventId }: ChatContainerProps) {
  const { user } = useAuth();
  const [userMessage, setUserMessage] = useState('');

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

    const chatMessaeg = {
      message: userMessage,
      authorUser: {
        name: user?.name,
        avatar: user?.avatar,
      },
      timestamp: Date.now(),
    };

    try {
      await database.ref(`events/${eventId}/chat`).push(chatMessaeg);
      toast.success('Mensagem enviada com sucesso!', { position: 'bottom-right' });
      setUserMessage('');
    } catch (e) {
      toast.error('Erro ao enviar pergunta. Tente novamente!');
    }
  }

  return (
    <ChatContainerDiv>
      <span className="sectionTitle">Chat</span>
      <div className="chatMessages">
        {messageArrayMock.map((item) => (
          <ChatItem
            key={item.id}
            user={item.user}
            timestamp={item.timestamp}
            message={item.message}
          />
        ))}
      </div>
      <div className="chatInputArea">
        <textarea
          id="messageInput"
          name="w3review"
          rows={4}
          cols={50}
          placeholder="Escreva aqui a sua mensagem ..."
          onChange={handleInputChange}
          maxLength={240}
          value={userMessage}
        />
        <div className="actionArea">
          <div className="visualDiv" />
          <div className="buttonDiv">
            <span>
              {userMessage.length}
              /240
            </span>
            <button aria-label="Enviar mensagem no chat" type="button" onClick={handleSendChat} disabled={!user}>
              <FaPaperPlane color="white" fontSize="1.2em" />
            </button>
          </div>
        </div>
      </div>
    </ChatContainerDiv>
  );
}
