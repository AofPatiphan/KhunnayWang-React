import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <div className="d-flex ps-5">
                <div className="border-end pe-3 head">Home</div>
                <div className="ps-3 statusheader">Status</div>
            </div>
            <div className="d-flex flex-column align-items-center logocontainer">
                <div className="appname">KHUNNAYWANG</div>
                <div>
                    <img
                        className="logopicture"
                        src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644699867/dde7b031765bbf67d0a8a3530e56dbfa_vrg30d.jpg"
                        alt="logo"
                    />
                </div>
                <div>
                    <button
                        className="btn buttonhome"
                        onClick={() => navigate('/status')}
                    >
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div style={{ textAlign: 'center' }}>ORDER STATUS</div>
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
            </div>
        </div>
    );
}

export default Home;
