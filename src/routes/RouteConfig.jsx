import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/mainlayout/MainLayout';
import Home from '../pages/home/Home';
import Status from '../pages/status/Status';
import OrderDetail from '../pages/orderdetail/OrderDetail';
import Admin from '../pages/admin/Admin';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/status', element: <Status /> },
    { path: '/detail/:trackingNumber', element: <OrderDetail /> },
    { path: '/admin', element: <Admin /> },
    { path: '/admin/create', element: <Admin /> },
    { path: '/admin/:trackingNumber', element: <Admin /> },
    { path: '*', element: <Navigate to="/" replace={true} /> },
];

function RouteConfig() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {routes.map((item) => (
                        <Route
                            path={item.path}
                            element={item.element}
                            key={item.path}
                        />
                    ))}
                </Route>
            </Routes>
        </>
    );
}

export default RouteConfig;
