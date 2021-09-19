/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface TextAreaOfQuestionChatProps {
    id: string;
    placeHolder: string;
    maxCharacters: number;
    fieldValue: string;
    // eslint-disable-next-line no-unused-vars
    handleSendFunction: any;
    handleInputChange: any;
    disabled: boolean;
}

export function TextAreaOfQuestionChat(props: TextAreaOfQuestionChatProps) {
    const {
        id, placeHolder, maxCharacters,
        fieldValue, handleSendFunction, handleInputChange, disabled,
    } = props;

    return (
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
                <div className="buttonDiv">
                    <span>
                        {fieldValue.length}
                        /
                        {maxCharacters.toString()}
                    </span>
                    <button aria-label="Enviar mensagem no chat" type="button" onClick={handleSendFunction} disabled={disabled}>
                        <FaPaperPlane color="white" fontSize="1.2em" />
                    </button>
                </div>
            </div>
        </>
    );
}
