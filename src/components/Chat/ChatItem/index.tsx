import React from 'react';
import { ChatMessage } from './styles';

interface UserInterface {
    name: string;
    isAdmin: Boolean;
}

interface MessageInterface {
    user: UserInterface;
    message: string;
    timestamp?: string;
};

export const ChatItem: React.FC<MessageInterface> = ({user, message, timestamp}) => {

    return (
        <ChatMessage>
            <p>
                <span className="userName">{user.name}: </span>
                <span className="userMessage">{message}</span>
            </p>
            <p className="messageInfo">
                <span>{timestamp}</span>
            </p>
        </ChatMessage>
    )
}
