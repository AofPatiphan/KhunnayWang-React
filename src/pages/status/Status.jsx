import React from 'react';
import { useNavigate } from 'react-router-dom';
import './status.css';

function Status() {
    const navigate = useNavigate();
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
        </div>
    );
}

export default Status;
