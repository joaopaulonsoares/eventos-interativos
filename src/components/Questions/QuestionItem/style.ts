import styled from 'styled-components';


export const QuestionBox = styled.div`
  
  background-color: var(--gray-200);
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 1rem;
  padding: 5px;
  display: flex;

  p{
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

  .userMessage {
    font-weight: regular;
    color: var(--gray-600);
  }

  .questionFooter {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
`;

