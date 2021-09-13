import React from 'react';
import { LoginButton, LogoutButton } from './style';


export function LoginLogoutButton(){
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        <LogoutButton type="button">
            Usuário Logado
        </LogoutButton>
    ): (
        <LoginButton type="button">
            LOGIN         
        </LoginButton>
    );
}