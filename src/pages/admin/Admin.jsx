import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckFormAdmin from '../../components/checkformadmin/CheckFormAdmin';
import CreateForm from '../../components/createform/CreateForm';
import UpdateForm from '../../components/updateform/UpdateForm';
import { StatusContext } from '../../contexts/StatusContext';
import OrderDetailAdmin from '../orderdetail/OrderDetailAdmin';
import './admin.css';

function Admin() {
    const navigate = useNavigate();
    const location = useLocation();
    const { docsAdmin } = useContext(StatusContext);

    return (
        <div className="adminpage">
            {/* Header */}
            <div className="d-flex ps-4 mb-3">
                <div
                    className={`border-end pe-3 ${
                        location.pathname === '/admin' ? 'head' : 'statusheader'
                    }`}
                    onClick={() => {
                        navigate('/admin');
                    }}
                >
                    Order
                </div>
                <div
                    className={`ps-3 ${
                        location.pathname === '/admin/create'
                            ? 'head'
                            : 'statusheader'
                    }`}
                    onClick={() => {
                        navigate('/admin/create');
                    }}
                >
                    Create
                </div>
            </div>

            {/* Content */}
            {location.pathname === '/admin/create' ? (
                <>
                    <CreateForm />
                </>
            ) : location.pathname === '/admin' ? (
                <>
                    <CheckFormAdmin />
                    {docsAdmin.map((item) => {
                        return <OrderDetailAdmin item={item} key={item.id} />;
                    })}
                </>
            ) : location.pathname.includes('/admin/update/') ? (
                <>
                    <CheckFormAdmin />
                    {docsAdmin.map((item) => {
                        return <UpdateForm item={item} key={item.id} />;
                    })}
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Admin;
