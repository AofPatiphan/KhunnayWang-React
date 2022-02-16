import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StatusContext } from '../../contexts/StatusContext';
import './updateform.css';

function UpdateForm({ item }) {
    const location = useLocation();

    const [editAmountStatus, setEditAmountStatus] = useState(
        item.payment.amount.status
    );
    const [editFreightPrice, setEditFreightPrice] = useState(
        item.payment.tax.price
    );
    const [editFreightStatus, setEditFreightStatus] = useState(
        item.payment.tax.status
    );
    const [editStatus, setEditStatus] = useState(item.status);
    const [editTrackingNumber, setEditTrackingNumber] = useState(
        item.trackingNumber
    );
    const [editRemark, setEditRemark] = useState(item.remark);

    const { updateOrder } = useContext(StatusContext);

    const handleSubmitform = (e) => {
        e.preventDefault();
        updateOrder(
            editAmountStatus,
            editFreightStatus,
            +editStatus,
            editTrackingNumber,
            editRemark,
            item.payment.amount.price,
            editFreightPrice,
            item.id
        );
    };

    if (item.id !== location.pathname.split('/')[3]) {
        return <></>;
    }
    return (
        <form className="checkform" onSubmit={handleSubmitform}>
            <div className="mb-3">
                <label>Amount status :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Amount status"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={editAmountStatus}
                    onChange={(e) => setEditAmountStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Freight price :</label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="freight price"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={editFreightPrice}
                    onChange={(e) => setEditFreightPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Freight status :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="freight status"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={editFreightStatus}
                    onChange={(e) => setEditFreightStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Order status :</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="order status"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Tracking number :</label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="tracking number"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={editTrackingNumber}
                    onChange={(e) => setEditTrackingNumber(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Remark :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="remark"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={editRemark}
                    onChange={(e) => setEditRemark(e.target.value)}
                />
            </div>
            <div>
                <button className="btn submitdata">
                    <div>Submit</div>
                </button>
            </div>
        </form>
    );
}

export default UpdateForm;
