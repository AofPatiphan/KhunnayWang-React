import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StatusContext } from '../../contexts/StatusContext';
import timeSince from '../../services/timeSince';
import './orderdetail.css';

function OrderDetail() {
    const { fetchDetail, docsDetail } = useContext(StatusContext);
    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        fetchDetail(location.pathname.split('/')[2]);
    }, []);

    if (!docsDetail) {
        return <></>;
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="detailcontainer">
                <div className="headernumber">NO.{docsDetail.number}</div>
                <div className="headerorder">ORDER</div>

                {/* Date */}
                <div className="list">
                    <div>Date</div>
                    <div className="detail">
                        {timeSince(docsDetail?.createdAt?.seconds)}
                    </div>
                </div>

                {/* Brand */}
                <div className="list">
                    <div>Brand</div>
                    <div className="detail">{docsDetail.brand}</div>
                </div>

                {/* Description */}
                <div className="list" style={{ marginBottom: '15px' }}>
                    <div>Description</div>
                </div>
                <div className="sublist">
                    <div>For</div>
                    <div className="detail">{docsDetail?.description?.for}</div>
                </div>
                <div className="sublist">
                    <div>Type</div>
                    <div className="detail">
                        {docsDetail?.description?.type}
                    </div>
                </div>
                <div className="sublist">
                    <div>Color/Favor</div>
                    <div className="detail">
                        {docsDetail?.description?.color}
                    </div>
                </div>
                <div className="sublist">
                    <div>Qty</div>
                    <div className="detail">
                        {docsDetail?.description?.quantity}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
