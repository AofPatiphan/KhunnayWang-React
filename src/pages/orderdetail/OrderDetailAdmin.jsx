import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StatusContext } from '../../contexts/StatusContext';
import './orderdetail.css';

function OrderDetailAdmin({ item }) {
    const { fetchDetail, docsDetail } = useContext(StatusContext);
    const location = useLocation();

    let unix_timestamp = docsDetail?.createdAt?.seconds;
    var date = new Date(unix_timestamp * 1000);

    useEffect(() => {
        fetchDetail(item.trackingNumber);
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
                        {String(date).slice(3, 11)},{' '}
                        {String(date).slice(11, 15)}
                    </div>
                </div>

                {/* Brand */}

                <div className="list">
                    <div>Brand</div>
                    <div className="detail">{docsDetail.brand}</div>
                </div>

                {/* Description */}
                <>
                    <div className="list" style={{ marginBottom: '5px' }}>
                        <div>Description</div>
                    </div>
                    <div className="sublist">
                        <div>For</div>
                        <div className="detail">
                            {docsDetail?.description?.for}
                        </div>
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
                </>

                {/* Payment */}
                <div>
                    <div className="headerorder">PAYMENT</div>
                    <div className="paymentdetail">
                        <div>Amount</div>
                        <div className="d-flex">
                            <div>{docsDetail?.payment?.amount?.price}</div>
                            <div
                                className={
                                    docsDetail?.payment?.amount?.status
                                        ? `checkedbutton`
                                        : `checkbutton`
                                }
                            >
                                <i
                                    className="bi bi-check-lg"
                                    style={{ fontSize: '20px' }}
                                ></i>
                            </div>
                        </div>
                    </div>
                    <div className="paymentdetail">
                        <div>freight</div>
                        <div className="d-flex">
                            <div>{docsDetail?.payment?.tax?.price}</div>
                            <div
                                className={
                                    docsDetail?.payment?.tax?.status
                                        ? `checkedbutton`
                                        : `checkbutton`
                                }
                            >
                                <i
                                    className="bi bi-check-lg"
                                    style={{ fontSize: '20px' }}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status */}
                <div>
                    <div className="headerorder">STATUS</div>
                    <div className="backgroundslider">
                        <div
                            className="slider"
                            style={{
                                width: `${
                                    docsDetail.status === 1
                                        ? '0%'
                                        : docsDetail.status === 2
                                        ? '25%'
                                        : docsDetail.status === 3
                                        ? '50%'
                                        : docsDetail.status === 4
                                        ? '75%'
                                        : docsDetail.status === 5
                                        ? '100%'
                                        : ''
                                }`,
                            }}
                        ></div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div style={{ textAlign: 'center', color: `#738c72` }}>
                            <i className="bi bi-cart statusicon"></i>
                            <p className="statuslabel">Ordered</p>
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                color: `${
                                    docsDetail.status > 1
                                        ? '#738c72'
                                        : '#42434730'
                                }`,
                            }}
                        >
                            <i className="bi bi-house statusicon"></i>
                            <p className="statuslabel">
                                China’s <br /> warehose
                            </p>
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                color: `${
                                    docsDetail.status > 2
                                        ? '#738c72'
                                        : '#42434730'
                                }`,
                            }}
                        >
                            <i className="bi bi-house statusicon"></i>
                            <p className="statuslabel">
                                Thailand’s <br /> warehouse
                            </p>
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                color: `${
                                    docsDetail.status > 3
                                        ? '#738c72'
                                        : '#42434730'
                                }`,
                            }}
                        >
                            <i className="bi bi-geo-alt statusicon"></i>
                            <p className="statuslabel">Delivered</p>
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                color: `${
                                    docsDetail.status > 4
                                        ? '#738c72'
                                        : '#42434730'
                                }`,
                            }}
                        >
                            <i className="bi bi-person-fill statusicon"></i>
                            <p className="statuslabel">Done</p>
                        </div>
                    </div>
                </div>

                {/* Tracking No. */}
                <div>
                    <div className="headerordertracking">TRACKING NO.</div>
                    <div>{docsDetail.trackingNumber}</div>
                    <div className="headerordertracking">REMARK</div>
                    <div>{docsDetail.remark}</div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailAdmin;
