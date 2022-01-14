import React, {useContext, createContext, useState} from 'react';

export const AuthUserContext = createContext();
export const useAuth = ()=> useContext(AuthUserContext)

export const AuthUserContextProvider = ({children}) => {
    const [authUser, setauthUser] = useState({})

    const authUserSignOut = ()=>{
        setauthUser({})
    }

    return (
        <AuthUserContext.Provider value={{authUser, setauthUser, authUserSignOut}}>
            {children}
        </AuthUserContext.Provider>
    )
}
