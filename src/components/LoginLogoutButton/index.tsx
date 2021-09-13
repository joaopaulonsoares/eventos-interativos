import React from 'react';
import { LoginButton, LogoutButton } from './style';
import { AiOutlineLogout } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";


export function LoginLogoutButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <LogoutButton type="button">
            <FaGoogle />
                Username
            <AiOutlineLogout />
        </LogoutButton>
    ): (
        <LoginButton type="button">
            LOGIN         
        </LoginButton>
    );
}