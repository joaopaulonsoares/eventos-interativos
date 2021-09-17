import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { ChatMessage } from "./styles";

interface UserInterface {
  name: string;
  isAdmin: boolean;
}

interface MessageInterface {
  user: UserInterface;
  message: string;
  timestamp?: string;
}

export const ChatItem: React.FC<MessageInterface> = ({ user, message, timestamp }) => (
  <ChatMessage isAdmin={user.isAdmin}>
    <div className="messageContent">
      <p>
        <span className="userName">{user.isAdmin ? "Administrador" : user.name}: </span>

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
