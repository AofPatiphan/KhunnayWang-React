import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusContext } from '../../contexts/StatusContext';
import './checkform.css';

function CheckForm() {
    const { user, setUser, fetchStatus } = useContext(StatusContext);
    const navigate = useNavigate();

    const handleSubmitform = (e) => {
        e.preventDefault();
        if (user !== 'admin') {
            fetchStatus();
            setUser('');
        }
        if (user === '@mookkook') {
            navigate('/admin');
            setUser('');
        }
    };
    return (
        <form className="checkform" onSubmit={handleSubmitform}>
            <div className="mb-3">
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

export default CheckForm;
