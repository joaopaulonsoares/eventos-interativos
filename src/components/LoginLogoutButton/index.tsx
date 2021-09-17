import React from 'react';
import { useRouter } from 'next/router'
import { LoginButton, LogoutButton } from './style';
import { AiOutlineLogout } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { auth, firebase } from '../../services/firebase';

export function LoginLogoutButton(){
    const isUserLoggedIn = false;
    const router = useRouter()


    async function signInWithGoogle() {
        console.log('chamou')
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
        });
        //router.push('/room/1');
    }

    return isUserLoggedIn ? (
        <LogoutButton type="button">
            <FaGoogle />
                Username
            <AiOutlineLogout />
        </LogoutButton>
    ): (
        <LoginButton type="button" onClick={signInWithGoogle}>
            LOGIN         
        </LoginButton>
    );
}