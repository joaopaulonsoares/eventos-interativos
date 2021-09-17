import React from 'react';
import Image from 'next/image';
import logoImg from '../../assets/images/logo.png';
import { HeaderContainer } from './styles';
import { LoginLogoutButton } from '../LoginLogoutButton';

export function Header() {
  const isHomePage = false;
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo" />

      {!isHomePage && (
        <nav>
          <a href="https://localhost:3000/">Página inicial</a>
          <a href="https://localhost:3000/" className="active">
            Audiência
          </a>
          <a href="https://localhost:3000/">Agenda</a>
        </nav>
      )}

      <LoginLogoutButton />
    </HeaderContainer>
  );
}
