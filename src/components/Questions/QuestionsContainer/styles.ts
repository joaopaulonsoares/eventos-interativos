import styled from 'styled-components';


export const ChatContainerDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.7rem;
    

    .sectionTitle{
        font-size: 1.5rem;
        height: 5%;
    }

    .questionsArea {
        height: 75%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        overflow: auto;
        // overflow-y: hidden;
        ::-webkit-scrollbar{width: 5px}
        ::-webkit-scrollbar-thumb{background-color: var(--gray-300); border-radius: 10px;}
    }

    .questionInputArea {
        height: 20%;
        width: 100%;

        textarea {
            height: 85%;
            width: 100%;
            border-top:  6px solid var(--gray-200);
            border-left:  6px solid var(--gray-200);
            border-right:  6px solid var(--gray-200);
            border-bottom: 0px;
            border-radius: 10px 0px;
            resize: none;
        }
        textarea:focus{
            outline: 1px solid var(--gray-400); 
        }

        .actionArea {
            height: 20%;
            margin-top: -4px;
            display: flex;

            .visualDiv {
                background-color: var(--gray-200);
                width: 70%;
                height: 100%;
                border-radius: 0px 0px 0px 10px;
            }

            .buttonDiv {
                background-color: var(--yellow);
                width: 30%;
                height: 100%;
                border-radius: 0px 0px 10px 10px;

                display: flex;
                align-items: center;
                justify-content: space-around;

                span {
                    color: white;
                    font-weight: bold;
                }

                button{
                    background-color: Transparent;
                    background-repeat:no-repeat;
                    border: none;
                    cursor:pointer;
                    overflow: hidden;
                    outline:none;

                    transition: filter 0.2s;

                    &:hover {
                        color: var(--yellow);
                    }
                }

            }

        }
    }

`;

