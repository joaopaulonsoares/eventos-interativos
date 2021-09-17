import React from 'react';
import { Avatar} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";

import { Icon } from "@chakra-ui/react"

import { QuestionBox } from './style';

interface UserInterface {
    name: string;
    avatar?: string | undefined;
}

interface QuestionInterface {
    user: UserInterface;
    question: string;
    timestamp?: string;
};


export const QuestionItem: React.FC<QuestionInterface> = ({user, question, timestamp}) => {

    return (
        <QuestionBox>
            <div className="messageContent">
                <p>                    
                    <span className="userMessage">{question}</span>
                </p>

                <div className="questionFooter">
                    <div className="userInfo">
                        <div className="avatar"><Avatar size="sm" name="Dan Abrahmov" src={user.avatar} /></div>
                        <div>
                            <p className="userName">{user.name}</p>
                            <p className="questionInfo">11:09 16/08/2021</p>
                        </div>
                    </div>
                    
                    <div className="vote">
                        <IconButton
                            aria-label="Votar na pergunta"
                            icon={<Icon as={AiOutlineLike} />}
                            title="Vote nesta pergunta" 
                        />
                    </div>
                </div>
            </div>

        </QuestionBox>
    )
}
