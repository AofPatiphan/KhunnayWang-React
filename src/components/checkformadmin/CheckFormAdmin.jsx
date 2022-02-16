import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusContext } from '../../contexts/StatusContext';
import './checkformadmin.css';

function CheckFormAdmin() {
    const { tracking, setTracking, fetchStatusAdmin } =
        useContext(StatusContext);
    const navigate = useNavigate();

    const handleSubmitform = (e) => {
        e.preventDefault();
        fetchStatusAdmin();
        setTracking('');
    };

    return (
        <form className="checkform" onSubmit={handleSubmitform}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tracking No."
                    style={{
                        borderRadius: '12px',
                        width: '317px',
                        height: '56px',
                    }}
                    value={tracking}
                    onChange={(e) => setTracking(e.target.value)}
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
