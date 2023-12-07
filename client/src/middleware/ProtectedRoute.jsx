import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
import {jwtDecode} from 'jwt-decode'

const ProtectedRoute = ({children, roleType},{}) => {
    let location = useLocation();
    let token = localStorage.getItem('token')

    if (!token)
    {
        return <Navigate to="/login" state={{ from: location}} replace />
    }

    let decodedToken = jwtDecode(token);

    if (!decodedToken)
        {
            return <Navigate to="/login" state={{ from: location}} replace />
        }
    if (roleType == 'admin'){
        if (decodedToken.role == 'student'){
            return <Navigate to="/" state={{ from: location}} replace />
        }
        else if(decodedToken.role !== 'admin') {
            return <Navigate to="/login" state={{ from: location}} replace />
        }
    } else if (roleType == 'student'){
        if(decodedToken.role !== 'admin' && decodedToken.role !== 'student') {
            return <Navigate to="/login" state={{ from: location}} replace />
        }
    }
 return children

};

export default ProtectedRoute;