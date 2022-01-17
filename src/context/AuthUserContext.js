import React, {useContext, createContext, useState, useCallback, useEffect, useReducer} from 'react';
import { regUser } from '../lib/helpers';

export const AuthUserContext = createContext();
export const useAuth = ()=> useContext(AuthUserContext)

const reducer = (state, action)=>{
    switch(action.type){
        case "success":
            state = {...state, success: action.payload}
            return state;
        case "emailError":
            state = {...state, emailError: action.payload}
            return state;
        case "passwordError":
            state = {...state, passwordError: action.payload}
            return state;
        default:
            break
    }
}

export const AuthUserContextProvider = ({children}) => {
    let reset;
    const [authUser, setauthUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, dispatch] = useReducer(reducer, {
        success:"",
        emailError:"",
        passwordError:""
    });

    const logout = ()=>{
        setauthUser({})
    }

    const login = (email,password)=>{
        setauthUser({email,password})
    }

    const messageUpdate = (text)=>{
        dispatch({type:"success",payload:text})
        reset = setTimeout(()=>{
            dispatch({type:"success",payload:""})
        }, 5000)
    }

    const registerUser = async (firstname, lastname,email, password)=>{
        setLoading(true)
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }

        const res = regUser(user);
        res.then(data=> {
            if(data.status === 200){
                console.log(data)
                messageUpdate("Registration Successful")
            }
        })
        .catch(err=>{
            if(err.response.data.email.length > 0){
                dispatch({type:"emailError",payload:err.response.data.email[0]})
            }
            if(err.response.data.password.length > 0){
                dispatch({type:"passwordError",payload:err.response.data.password[0]})
            }
            return err
        }).finally((x)=>{
            setLoading(false)
        })
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

    useEffect(()=>{
        return ()=>{
            if(reset){
                clearTimeout(reset)
            }
        }
    },[reset])
    
    return (
        <AuthUserContext.Provider value={{authUser,loading,message,dispatch,registerUser, login, logout, openGoogleLoginPage}}>
            {children}
        </AuthUserContext.Provider>
    )
}
