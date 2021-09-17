import styled from "styled-components";

export const RoomContainer = styled.div`
  height: 93vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sectionHeadDiv {
    height: 10%;
  }

  .sectionContentDiv {
    background-color: white;
    width: 100%;
    height: 90%;
    border: 2px solid var(--gray-300);
    border-radius: 1rem;
  }
`;

export const QuestionsSection = styled.div`
  width: 25%;
  height: 100%;
  padding: 1rem 0.5rem;

  .buttonDiv {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;

    button {
      width: 60%;
      height: 40%;
      border: none;
      background-color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gray-300);

      transition: filter 0.2s;

      &:hover {
        color: var(--gray-500);
      }

      .icon {
        padding-right: 5px;
      }
    }
  }
`;

export const VideoSection = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem 0rem;

  .sectionTitleInformation {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .sectionSubTitleInformation {
    font-size: 1rem;
    font-weight: regular;
    margin-top: 10px;
    color: var(--gray-400);
  }

  .videoPlayer {
    height: 60%;
  }

  .eventInformation {
    height: 30%;
    width: 100%;
    padding: 1rem;
    background-color: var(--gray-200);
  }
`;

export const ChatSection = styled.div`
  width: 25%;
  height: 100%;
  padding: 1rem 0.5rem;

  .shareContentDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      font-size: 1.5rem;
      color: var(--gray-300);
    }

    .shareIcons {
      padding-top: 10px;
      font-size: 1rem;
      li {
        display: inline;
        margin-right: 10px;
      }
    }
  }
`;
