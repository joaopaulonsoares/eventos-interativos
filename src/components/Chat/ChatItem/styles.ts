import styled from 'styled-components';


export const ChatMessage = styled.div`

  background-color: var(--gray-200);
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 1rem;

  p{
    padding: 5px;
    line-height: 1.3rem;
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

    span {
      padding-right: 0.3rem;
    }
  }
`;

