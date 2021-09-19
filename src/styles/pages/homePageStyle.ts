import styled from 'styled-components';

export const Container = styled.div`
  max-width: 75%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 80px;
  }

  div:first-child {
    padding-top: 1rem;
  }

  div {
    margin-bottom: 2rem;
  }
`;
