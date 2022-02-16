import React, { useContext, useState } from 'react';
import { StatusContext } from '../../contexts/StatusContext';
import './updateform.css';

function UpdateForm({ item }) {
    const [editAmountStatus, setEditAmountStatus] = useState(
        item.payment.amount.status
    );
    const [editFreightStatus, setEditFreightStatus] = useState(
        item.payment.tax.status
    );
    const [editStatus, setEditStatus] = useState(item.status);
    const [editRemark, setEditRemark] = useState(item.remark);

    const { updateOrder } = useContext(StatusContext);

    const handleSubmitform = (e) => {
        e.preventDefault();
        updateOrder(
            editAmountStatus,
            editFreightStatus,
            +editStatus,
            editRemark,
            item.payment.amount.price,
            item.payment.tax.price,
            item.id
        );
    };
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
