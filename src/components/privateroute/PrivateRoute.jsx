import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (isAuthenticated, element) => {
    console.log(isAuthenticated);
    
    return (
        isAuthenticated ? element : <Navigate to="/login"  replace/>
    );
};

export default PrivateRoute;