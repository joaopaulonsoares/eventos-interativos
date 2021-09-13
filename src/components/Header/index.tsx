import React from 'react';
import { HeaderContainer } from './styles';
import { LoginLogoutButton } from '../LoginLogoutButton';

export function Header(){

    return (
        <HeaderContainer>
                <img src="../../assets/images/logo.png" alt="ig.news logo" />
                <nav>
                        <a href="#">Página inicial</a>
                        <a href="#">Audiência</a>
                        <a href="#" className="active">Agenda</a>
                </nav>

                <LoginLogoutButton />

        </HeaderContainer>
    )
}