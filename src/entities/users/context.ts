'use client'

import React from "react";

type ValuesType = {
    isLoggedIn?: boolean,
    username?: string,
    avatar?: string,
    onLogin?: (token: string) => void,
    onLogout?: () => void,
}

const UserContext = React.createContext<ValuesType>({
    isLoggedIn: false,
    username: '',
    avatar: '',
    onLogin: () => {},
    onLogout: () => {},
});

export const UserProvider = UserContext.Provider;

export default UserContext;