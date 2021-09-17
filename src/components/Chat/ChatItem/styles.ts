import styled from "styled-components";

interface ChatMessageProps {
  isAdmin: boolean;
}

export const ChatMessage = styled.div<ChatMessageProps>`
  background-color: ${(props) => (props.isAdmin ? "var(--yellow)" : "var(--gray-200)")};
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 1rem;
  padding: 5px;
  display: flex;

  p {
    padding: 5px;
    line-height: 1.3rem;
  }

  .options {
    width: 5%;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 5px;
  }

  .messageContent {
    width: 95%;
  }

  .userName {
    font-weight: bold;
    padding-right: 0.1rem;
  }

  .userMessage {
    font-weight: regular;
    color: var(--gray-600);
  }

  .messageInfo {
    font-size: 0.8rem;
    color: var(--gray-400);
    width: 100%;
    display: flex;
    flex-direction: row-reverse;

    span {
      padding-right: 0.3rem;
    }
  }
`;
