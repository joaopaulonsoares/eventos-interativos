import styled from 'styled-components';

export const TextAreaInputContainer = styled.div`
    height: 100%;
    width: 100%;

    textarea {
      height: 85%;
      width: 100%;
      border-top: 6px solid var(--gray-200);
      border-left: 6px solid var(--gray-200);
      border-right: 6px solid var(--gray-200);
      border-bottom: 0px;
      border-radius: 10px 0px;
      resize: none;
    }
    textarea:focus {
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

      .sendButtonDiv {
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

        button {
          background-color: Transparent;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          overflow: hidden;
          outline: none;

          transition: filter 0.2s;

          &:hover {
            color: var(--yellow);
          }
        }
      }
    }

    .userNotLoggedIn {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: bold;
    }
`;
