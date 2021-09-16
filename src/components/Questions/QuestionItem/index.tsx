import React from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { QuestionBox } from './style';

interface UserInterface {
    name: string;
}

interface QuestionInterface {
    user: UserInterface;
    question: string;
    timestamp?: string;
    votes: number;
    currentUserVoted: boolean;
};


export const QuestionItem: React.FC<QuestionInterface> = ({user, question, timestamp, votes, currentUserVoted}) => {

    return (
        <QuestionBox>
            <div className="messageContent">
                <p>                    
                    <span className="userMessage">{question}</span>
                </p>

                <div className="questionFooter">
                    <div>Infos </div>
                    
                    <div>Like</div>
                </div>
            </div>
            <div className="options">
                <HiDotsVertical />
            </div>
        </QuestionBox>
    )
}
