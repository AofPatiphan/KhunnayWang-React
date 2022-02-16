import React, { useContext } from 'react';
import { StatusContext } from '../../contexts/StatusContext';
import './createform.css';

function CreateForm() {
    const {
        number,
        setNumber,
        brand,
        setBrand,
        forr,
        setForr,
        type,
        setType,
        color,
        setColor,
        quantity,
        setQuantity,
        amountPrice,
        setAmountPrice,
        amountStatus,
        setAmountStatus,
        freightPrice,
        setFreightPrice,
        freightStatus,
        setFreightStatus,
        status,
        setStatus,
        trackingNumber,
        setTrackingNumber,
        remark,
        setRemark,
        username,
        setUsername,
        createOrder,
    } = useContext(StatusContext);

    const handleSubmitform = (e) => {
        e.preventDefault();
        createOrder();
    };
    return (
        <form className="checkform" onSubmit={handleSubmitform}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="number"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="brand"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="for"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={forr}
                    onChange={(e) => setForr(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="type"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="color"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="quantity"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Amount price"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={amountPrice}
                    onChange={(e) => setAmountPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Amount status"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={amountStatus}
                    onChange={(e) => setAmountStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="freight price"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={freightPrice}
                    onChange={(e) => setFreightPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="freight status"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={freightStatus}
                    onChange={(e) => setFreightStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="order status"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="tracking number"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="remark"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

export default CreateForm;
