import React, { Children, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }


    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;