import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './mainlayout.css';

function MainLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <h1 className="d-flex justify-content-start mt-3 mb-5 header">
                {location.pathname === '/' ? (
                    <div>&nbsp;</div>
                ) : location.pathname === '/status' ? (
                    <i
                        className="bi bi-arrow-left ps-4"
                        onClick={() => navigate('/')}
                    ></i>
                ) : location.pathname === '/detail' ? (
                    <i
                        className="bi bi-arrow-left ps-4"
                        onClick={() => navigate('/status')}
                    ></i>
                ) : (
                    ''
                )}
            </h1>
            <Outlet />
        </>
    );
}

export default MainLayout;
