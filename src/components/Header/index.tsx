import React from 'react';
import Image from 'next/image'
import logoImg from '../../assets/images/logo.png';
import { HeaderContainer } from './styles';
import { LoginLogoutButton } from '../LoginLogoutButton';

export function Header(){
    const isHomePage = false;
    return (
        <HeaderContainer>
                <Image src={logoImg} alt="Logo" />

                { !isHomePage && (
                    <nav>
                        <a href="#">Página inicial</a>
                        <a href="#" className="active">Audiência</a>
                        <a href="#">Agenda</a>
                    </nav>
                )}

                <LoginLogoutButton />
        </HeaderContainer>
    )
}