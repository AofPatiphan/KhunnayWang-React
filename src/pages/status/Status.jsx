import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckForm from '../../components/checkform/CheckForm';
import OrderCard from '../../components/ordercard/OrderCard';
import { StatusContext } from '../../contexts/StatusContext';
import './status.css';

function Status() {
    const { docs, fetchStatus } = useContext(StatusContext);
    const navigate = useNavigate();

    return (
        <div>
            <div className="d-flex ps-5">
                <div
                    className="border-end pe-3 statusheader"
                    onClick={() => {
                        navigate('/');
                        fetchStatus();
                    }}
                >
                    Home
                </div>
                <div className="ps-3 head">Status</div>
            </div>
            <div className="statuscontent">
                <div className="checkorderstatustext">Check Order Status</div>
                <div className="subheader">
                    Please enter your twitter account to track your order status
                    (eg. @khunnaywang85)
                </div>
                <CheckForm />
                {docs.map((item) => {
                    return <OrderCard item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}

export default Status;
