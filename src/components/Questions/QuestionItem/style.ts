import styled from 'styled-components';


export const QuestionBox = styled.div`
  
  background-color: var(--gray-200);
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 10px 0;
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
    width: 100%;
  }

  .userMessage {
    font-weight: regular;
    color: var(--gray-600);
  }

  .questionFooter {
    display: flex;
    justify-content: space-between;
    padding: 5px;

    .userInfo {
      display: flex;
      align-items: center;
      
      .avatar {
        padding-right: 0.2rem;
      }

      p {
        padding: 0;
        margin: 0;
      }

      .userName {
        font-size: 0.9rem;
      }

      .questionInfo {
        font-size: 0.7rem;
        line-height: 0.7rem;
      }
    }

    .vote {
      display: flex;
      flex-direction: row-reverse;

      button {
        color: var(--yellow);
        background: none;

        svg {
          width: 25px;
          height: 25px;
        }
      }
    }

  }
`;

