import styled from 'styled-components';

export const ChatContainerDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.7rem;

  .sectionHeader{
    display: flex;
    justify-content: space-between;

    .sectionTitle {
      font-size: 1.5rem;
      height: 5%;
    }

    button {
      margin-right: 1rem;

      transition: filter 0.2s;

      &:hover {
        color: var(--gray-500);
      }
    }
  }

  .hideChatMessages {
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    color: var(--gray-500);
  }

  .chatMessages {
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    overflow: auto;
    // overflow-y: hidden;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--gray-300);
      border-radius: 10px;
    }

    .chatFeed{
      width: 100%;
      height: 100%;
    }
  }

  .chatInputArea {
    height: 20%;
    width: 100%;
  }
  .eventFinishedMessage {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
  }
`;
