import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Context/Context';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(authContext);
    if (!user) {
        <Navigate to={'login'}></Navigate>
    }
    return children;
   
};

export default PrivateRoute;