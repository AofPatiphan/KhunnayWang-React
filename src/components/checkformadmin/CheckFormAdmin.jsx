import React, { useContext } from 'react';
import { StatusContext } from '../../contexts/StatusContext';
import './checkformadmin.css';

function CheckFormAdmin() {
    const { tracking, setTracking, fetchStatusAdmin, user, setUser } =
        useContext(StatusContext);

    const handleSubmitform = (e) => {
        e.preventDefault();
        fetchStatusAdmin();
    };

    return (
        <form className="checkform" onSubmit={handleSubmitform}>
            <div className="mb-3">
                <label className="pt-2 pb-3">Customer account :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="@example"
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
    );
}

export default CheckFormAdmin;
