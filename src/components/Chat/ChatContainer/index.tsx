import React, {useState} from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { ChatContainerDiv } from './styles';
import { ChatItem } from '../ChatItem/index';

import { messageArrayMock } from './mock';

export function ChatContainer(){
    const [userMessage, setUserMessage] = useState('');
    const teste = messageArrayMock[0];
    console.log(teste)

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserMessage(event.currentTarget.value);
      };

    return (
        <ChatContainerDiv>
            <span className="sectionTitle">Chat</span>
            <div className="chatMessages">
                {
                    messageArrayMock.map((item, index) => {
                        return <ChatItem key={index} user={item.user} timestamp={item.timestamp} message={item.message}/>
                    })
                }
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
                />
                <div className="actionArea">
                    <div className="visualDiv"></div>
                    <div className="buttonDiv">
                        <span>{userMessage.length}/240</span>
                        <button><FaPaperPlane color="white"  fontSize="1.2em"/></button>
                    </div>
                </div>
            </div>
        </ChatContainerDiv>
    )
}