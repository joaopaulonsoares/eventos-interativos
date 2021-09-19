/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { TextAreaInputContainer } from './styles';

interface TextAreaOfQuestionChatProps {
    id: string;
    placeHolder: string;
    maxCharacters: number;
    fieldValue: string;
    handleSendFunction: any;
    handleInputChange: any;
    userIsNotLoggedIn: boolean;
}

export function TextAreaOfQuestionChat(props: TextAreaOfQuestionChatProps) {
    const {
        id, placeHolder, maxCharacters,
        fieldValue, handleSendFunction, handleInputChange, userIsNotLoggedIn,
    } = props;

    return (
        <TextAreaInputContainer>
            {(!userIsNotLoggedIn) ? (
                <>
                    <textarea
                        id={id}
                        name={id}
                        rows={4}
                        placeholder={placeHolder}
                        aria-label={placeHolder}
                        onChange={handleInputChange}
                        maxLength={maxCharacters}
                        value={fieldValue}
                    />
                    <div className="actionArea">
                        <div className="visualDiv" />
                        <div className="sendButtonDiv">
                            <span>
                                {fieldValue.length}
                                /
                                {maxCharacters.toString()}
                            </span>
                            <button aria-label="Enviar sua participação" type="button" onClick={handleSendFunction} disabled={userIsNotLoggedIn}>
                                <FaPaperPlane color="white" fontSize="1.2rem" />
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="userNotLoggedIn">Faça login para participar.</div>
            )}
        </TextAreaInputContainer>
    );
}
