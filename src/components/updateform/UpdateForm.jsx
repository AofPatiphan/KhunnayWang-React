import React, { useContext } from 'react';
import { StatusContext } from '../../contexts/StatusContext';
import './updateform.css';

function UpdateForm() {
    const [editAmountStatus, setEditAmountStatus] = useState('');
    const [editFreightStatus, setEditFreightStatus] = useState('');
    const [editStatus, setEditStatus] = useState('');
    const [editRemark, setEditRemark] = useState('');

    const { updateOrder } = useContext(StatusContext);

    console.log(docsAdmin);

    const handleSubmitform = (e) => {
        e.preventDefault();
        updateOrder(
            editAmountStatus,
            editFreightStatus,
            editStatus,
            editRemark
        );
    };
    return (
        <form className="checkform" onSubmit={handleSubmitform}>
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
                    value={editAmountStatus}
                    onChange={(e) => setEditAmountStatus(e.target.value)}
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
                    value={editFreightStatus}
                    onChange={(e) => setEditFreightStatus(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
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
