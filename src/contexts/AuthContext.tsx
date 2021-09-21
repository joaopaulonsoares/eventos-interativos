/* eslint-disable react/destructuring-assignment */
import React, {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { auth, firebase } from '../services/firebase';

type User = {
  id: string;
  name: string;
  shortName: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userRes) => {
      if (userRes) {
        const { displayName, photoURL, uid } = userRes;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        const shortName = displayName.split(' ');

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          shortName: `${shortName[0]} ${shortName[1] ? shortName[1] : ''}`,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      const shortName = displayName.split(' ');

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        shortName: `${shortName[0]} ${shortName[1] ? shortName[1] : ''}`,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>{props.children}</AuthContext.Provider>
  );
}
