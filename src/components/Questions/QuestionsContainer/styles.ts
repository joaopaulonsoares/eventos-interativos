import styled from 'styled-components';

export const ChatContainerDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.7rem;

  .sectionTitle {
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
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--gray-300);
      border-radius: 10px;
    }

    .questionsFeed {
      height: 100%;
    }
  }

  .questionInputArea {
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
