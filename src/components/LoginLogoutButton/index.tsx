import React from "react";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { LoginButton, LogoutButton } from "./style";

import { useAuth } from "../../hooks/useAuth";

export function LoginLogoutButton() {
  const { signInWithGoogle, user } = useAuth();
  const isUserLoggedIn = user;

  return isUserLoggedIn ? (
    <LogoutButton type="button">
      <Avatar size="xs" name="Dan Abrahmov" src={user.avatar} />
      {user.name}
      <AiOutlineLogout />
    </LogoutButton>
  ) : (
    <LoginButton type="button" onClick={signInWithGoogle}>
      LOGIN
    </LoginButton>
  );
}
