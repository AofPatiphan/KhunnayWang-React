import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderCard from '../../components/ordercard/OrderCard';
import { StatusContext } from '../../contexts/StatusContext';
import './status.css';

function Status() {
    const navigate = useNavigate();
    const { user, setUser, fetchStatus, docs } = useContext(StatusContext);
    const handleSubmitform = (e) => {
        e.preventDefault();
        fetchStatus();
    };
    return (
        <div>
            <div className="d-flex ps-5">
                <div
                    className="border-end pe-3 statusheader"
                    onClick={() => navigate('/')}
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
                <form className="checkform" onSubmit={handleSubmitform}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="name@example.com"
                            style={{
                                borderRadius: '12px',
                                width: '317px',
                                height: '56px',
                            }}
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="btn buttonstatus">
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div style={{ textAlign: 'center' }}>CHECK</div>
                            <div
                                style={{
                                    fontSize: '20px',
                                    backgroundColor: '#849A83',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                }}
                            >
                                <i className="bi bi-arrow-right"></i>
                            </div>
                        </button>
                    </div>
                </form>
                {docs.map((item) => {
                    return <OrderCard item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}

export default Status;
