import React from 'react';
import {useAuth } from "../context/AuthUserContext";
import Signin from '../routes/registration/Signin';

function AuthCheck({component: Component}) {

    const {authUser} = useAuth();

    return authUser?.email ? <Component /> : <Signin />
    
}

export default AuthCheck;