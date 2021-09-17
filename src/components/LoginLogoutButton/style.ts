import styled from 'styled-components';

export const LoginButton = styled.button`
  height: 2rem;
  width: 10%;
  border-radius: 2rem;
  background: var(--yellow);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  font-weight: bold;
  font-size: 1rem;

  transition: 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const LogoutButton = styled.button`
  height: 2rem;
  width: 10%;
  border-radius: 2rem;
  background: var(--gray-200);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
