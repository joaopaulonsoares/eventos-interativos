/* eslint-disable no-unused-vars */
import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { ChatMessage } from './styles';

interface MessageInterface {
  id: string;
  authorUser: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
}

export const ChatItem: React.FC<MessageInterface> = ({
  id, authorUser, message, timestamp,
}) => (
  <ChatMessage isAdmin={false}>
    <div className="messageContent">
      <p>
        <span className="userName">
          {authorUser.name}
          :
          {' '}
        </span>

        <span className="userMessage">{message}</span>
      </p>
      <p className="messageInfo">
        <span>{timestamp}</span>
      </p>
    </div>
    <div className="options">
      <HiDotsVertical />
    </div>
  </ChatMessage>
);
