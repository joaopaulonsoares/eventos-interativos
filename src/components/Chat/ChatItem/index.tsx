import React from 'react';
import { ChatMessage } from './styles';

interface UserInterface {
    name: string;
    isAdmin: boolean;
}

interface MessageInterface {
    user: UserInterface;
    message: string;
    timestamp?: string;
};

export const ChatItem: React.FC<MessageInterface> = ({user, message, timestamp}) => {

    return (
        <ChatMessage isAdmin={user.isAdmin}>
            <p>
                <span className="userName">{ user.isAdmin ? 'Administrador' : user.name }: </span>
                
                <span className="userMessage">{message}</span>
            </p>
            <p className="messageInfo">
                <span>{timestamp}</span>
            </p>
        </ChatMessage>
    )
}
