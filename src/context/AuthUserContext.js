import React, {useContext, createContext, useState, useCallback} from 'react';
import { regUser } from '../lib/helpers';

export const AuthUserContext = createContext();
export const useAuth = ()=> useContext(AuthUserContext)

export const AuthUserContextProvider = ({children}) => {
    const [authUser, setauthUser] = useState({});
    const [loading, setLoading] = useState(false)

    const logout = ()=>{
        setauthUser({})
    }

    const login = (email,password)=>{

    }

    const registerUser = async (firstname, lastname,email, password)=>{
        setLoading(true)
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }

        const res = await regUser(user);
        if(res?.email){
            setauthUser(user);
        }
        setLoading(false)
    }

    const openGoogleLoginPage = useCallback(() => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
      
        const scope = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');
      
        const params = {
          response_type: 'code',
          client_id: '237977889635-vfp15kdlalips90pbt3j76hsehhlejdp.apps.googleusercontent.com',
          redirect_uri: 'https://shoprackapi.herokuapp.com/api/v1/auth/login/google',
          prompt: 'select_account',
          access_type: 'offline',
          scope
        };
      
        const urlParams = new URLSearchParams(params).toString();
      
        window.location = `${googleAuthUrl}?${urlParams}`;
    }, []);

    return (
        <AuthUserContext.Provider value={{authUser,loading, registerUser, login, logout, openGoogleLoginPage}}>
            {children}
        </AuthUserContext.Provider>
    )
}
