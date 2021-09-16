import React, {useState} from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { ChatContainerDiv } from './styles';
import { QuestionItem } from '../QuestionItem/index';
import { questionsMock } from './mock';


export function QuestionContainer(){
    const [userMessage, setUserMessage] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserMessage(event.currentTarget.value);
      };

    return (
        <ChatContainerDiv>
            <span className="sectionTitle">Perguntas</span>
            <div className="questionsArea">
                {
                    questionsMock.map((question, index) => {
                        return (<QuestionItem 
                                    key={index}
                                    user={question.user}
                                    timestamp={question.timestamp}
                                    question={question.question}
                                    votes={question.votes}
                                    currentUserVoted={question.currentUserVoted}
                                />)
                    })
                }
            </div>
            <div className="questionInputArea">
                <textarea 
                    id="messageInput" 
                    name="w3review" 
                    rows={4} 
                    cols={50} 
                    placeholder="Escreva aqui a sua pergunta ..."
                    onChange={handleInputChange}
                    maxLength={400}
                />
                <div className="actionArea">
                    <div className="visualDiv"></div>
                    <div className="buttonDiv">
                        <span>{userMessage.length}/400</span>
                        <button><FaPaperPlane color="white"  fontSize="1.2em"/></button>
                    </div>
                </div>
            </div>
        </ChatContainerDiv>
    )
}
