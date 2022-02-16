import React, { useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { StatusContext } from '../../../contexts/StatusContext';
import './mainlayout.css';

function MainLayout() {
    const { fetchStatus, fetchStatusAdmin } = useContext(StatusContext);
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <h1 className="d-flex justify-content-start mt-3 mb-4 header">
                {location.pathname === '/' ? (
                    <div>&nbsp;</div>
                ) : location.pathname === '/status' ? (
                    <i
                        className="bi bi-arrow-left ps-4"
                        onClick={() => {
                            navigate('/');
                            fetchStatus();
                        }}
                    ></i>
                ) : location.pathname.includes('/detail') ? (
                    <i
                        className="bi bi-arrow-left ps-4"
                        onClick={() => {
                            navigate('/status');
                        }}
                    ></i>
                ) : location.pathname.includes('/admin') ? (
                    <i
                        className="bi bi-arrow-left ps-4"
                        onClick={() => {
                            navigate('/status');
                            fetchStatusAdmin();
                        }}
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
