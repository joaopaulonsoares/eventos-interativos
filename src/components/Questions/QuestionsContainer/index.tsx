import React, {FormEvent, useEffect, useState} from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { ChatContainerDiv } from './styles';
import { QuestionItem } from '../QuestionItem/index';
import Skeleton from 'react-loading-skeleton';
import ScrollableFeed from 'react-scrollable-feed'

import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';

import toast from 'react-hot-toast';


interface QuestionContainerProps {
    eventId: string;
}

type FirebaseQuestionsType = Record<string, {
    user: {
        name: string;
        avatar: string;
    },
    question: string,
    timestamp: string,
}>

type QuestionType = {
    id: string,
    user: {
        name: string;
        avatar: string;
    },
    question: string,
    timestamp: string,
};


export function QuestionContainer({ eventId }: QuestionContainerProps){
    const [newUserQuestion, setNewUserQuestion] = useState('');
    const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [fetchingQuestions, setFetchingQuestions] = useState(true);

    useEffect(() => {
        const roomRef = database.ref(`events/${eventId}/questions`);

        roomRef.on('value', events => {
            const databaseEvents = events.val();
            const firebaseQuestions : FirebaseQuestionsType = databaseEvents ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    question: value.question,
                    user: value.user,
                    timestamp: value.timestamp,
                }
            });
            setQuestions(parsedQuestions);
            setFetchingQuestions(false)
        })


    }, [eventId])

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewUserQuestion(event.currentTarget.value);
    };

    async function handleSendQuestion(event: FormEvent){
        event.preventDefault();
        if(newUserQuestion.trim() === '') {
            return ;
        }

        if(!user){
            console.log("Usuário não logado")
        }

        const question = {
            question: newUserQuestion,
            user: {
                name: user?.name,
                avatar: user?.avatar,
            },
            timestamp: '10/10/10',
        }

        try{
            await database.ref(`events/${eventId}/questions`).push(question);
            toast.success('Pergunta enviada com sucesso!', {position: "bottom-left"})
            setNewUserQuestion('');
        }catch(e){
            toast.error("Erro ao enviar pergunta. Tente novamente!")
        }
    }

    return (
        <ChatContainerDiv>
            <span className="sectionTitle">Perguntas ( {eventId})</span>
            <div className="questionsArea">
                { !fetchingQuestions ? (
                        <ScrollableFeed className="questionsFeed">
                            {
                                questions.map((question, index) => {
                                    return (<QuestionItem 
                                                key={index}
                                                user={question.user}
                                                timestamp={question.timestamp}
                                                question={question.question}
                                            />)
                                })
                            }
                        </ScrollableFeed>
                    ) : (
                        <Skeleton count={3} height={100}/>
                    )

                }
            </div>
            <div className="questionInputArea">

                { user ? (
                    <>
                        <textarea 
                            id="messageInput" 
                            name="w3review" 
                            rows={4} 
                            cols={50} 
                            placeholder="Escreva aqui a sua pergunta ..."
                            onChange={handleInputChange}
                            maxLength={400}
                            value={newUserQuestion}
                        />
                        <div className="actionArea">
                            <div className="visualDiv"></div>
                            <div className="buttonDiv">
                                <span>{newUserQuestion.length}/400</span>
                                <button onClick={handleSendQuestion} disabled={!user}>
                                    <FaPaperPlane color="white"  fontSize="1.2rem"/>
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Faça Login para enviar uma pergunta.</div>
                )}

            </div>
        </ChatContainerDiv>
    )
}
