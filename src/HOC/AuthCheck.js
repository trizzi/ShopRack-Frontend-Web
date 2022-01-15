import React from 'react';
import {Route, useNavigate} from "react-router-dom";
import {useAuth } from "../context/AuthUserContext";
import Signin from '../routes/registration/Signin';

function AuthCheck({component: Component, ...rest}) {

    const {authUser} = useAuth();
    const navigate = useNavigate();

    return (
        <Route
            {...rest}
            element={props=>{
                return authUser?.email ? <Signin /> : <Component {...props} />
            }}
        />
    )
}

export default AuthCheck;