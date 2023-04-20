import React, { useState, useEffect } from 'react';

export type ContextDefaults = {
  isLoggedIn: boolean;
  userDetails: User;
  setIsLoggedInHandler: Function;
  setUserDetailsHandler: Function;
};

const contextDefaults = {
  isLoggedIn: false,
  userDetails: {
    username: '',
    name: '',
    avatar_url: '',
  },
  setIsLoggedInHandler: () => {},
  setUserDetailsHandler: () => {},
};

const AuthContext = React.createContext<ContextDefaults>(contextDefaults);

type Props = {
  children: React.ReactNode;
};

type User = {
  username: string;
  name: string;
  avatar_url: string;
};

type ResponseT = {
  user: User;
};

// LOG IN SIMULATION (NO ACTUAL USER FUNCTIONALITY)
export const AuthContextProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState<User>({
    username: '',
    name: '',
    avatar_url: '',
  });

  const setIsLoggedInHandler = (state: boolean) => {
    setIsLoggedIn(state);
  };

  const setUserDetailsHandler = (data: ResponseT) => {
    if (data === null) {
      setUserDetails({
        username: '',
        name: '',
        avatar_url: '',
      });
      return;
    }

    setUserDetails(prevState => {
      return { ...prevState, ...data.user };
    });
  };

  const contextValue = {
    isLoggedIn,
    userDetails,
    setIsLoggedInHandler,
    setUserDetailsHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
