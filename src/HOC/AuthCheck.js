import React from 'react';
import { Navigate, useLocation } from 'react-router';
import {useAuth } from "../context/AuthUserContext";

function AuthCheck({component: Component}) {

    const {authUser} = useAuth();
    const location = useLocation();

    if(!authUser.email){
        return <Navigate to="/signin" state={{ from: location }} replace /> 
    }
    
    return <Component />;
    
}

export default AuthCheck;