import styled from 'styled-components';

export const BadgeEventHappening = styled.div`
    height: 60%;
    width: 100%;
    width: auto;
    background-color: var(--green-100);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;

    span{
      margin: 0 5px;
      color: var(--white);
      font-size: 0.7rem;
      font-weight: bold;
    }

    .dot-flashing {
      position: relative;
      width: 10px;
      margin: 0 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--red-200);
      color: var(--red-200);
      animation: dotFlashing 1s infinite linear alternate;
      animation-delay: 1s;
    }

    @keyframes dotFlashing {
      0% {
        background-color: var(--red-200);
      }
      50%,
      100% {
        background-color: var(--red-100);
      }
    }
  
`;

export const BadgeEventScheduled = styled.div`
    height: 60%;
    width: 100%;
    width: auto;
    background-color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    span{
      margin: 0 10px;
      color: var(--white);
      font-size: 0.7rem;
      font-weight: bold;
    }
`;

export const BadgeEventFinished = styled.div`
    height: 60%;
    width: 100%;
    width: auto;
    background-color: var(--gray-400);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    span{
      margin: 0 10px;
      color: var(--white);
      font-size: 0.7rem;
      font-weight: bold;
    }
`;

export const BadgeEventCanceled = styled.div`
    height: 60%;
    width: 100%;
    width: auto;
    background-color: var(--red-200);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    span{
      margin: 0 10px;
      color: var(--white);
      font-size: 0.7rem;
      font-weight: bold;
    }
`;
