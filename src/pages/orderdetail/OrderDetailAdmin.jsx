import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StatusContext } from '../../contexts/StatusContext';
import './orderdetail.css';

function OrderDetailAdmin({ item }) {
    const { deleteOrder } = useContext(StatusContext);
    const navigate = useNavigate();
    console.log(item);

    let unix_timestamp = item?.createdAt?.seconds;
    var date = new Date(unix_timestamp * 1000);

    if (!item) {
        return <></>;
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="detailcontainer">
                <div className="headernumber">
                    <div>NO.{item.number}</div>
                    <div className="d-flex">
                        <div
                            className="me-3"
                            onClick={() => navigate(`/admin/update/${item.id}`)}
                        >
                            Edit
                        </div>
                        <div onClick={() => deleteOrder(item.id)}>Delete</div>
                    </div>
                </div>
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
                    <div className="detail">{item.brand}</div>
                </div>

                {/* Description */}
                <>
                    <div className="list" style={{ marginBottom: '5px' }}>
                        <div>Description</div>
                    </div>
                    <div className="sublist">
                        <div>For</div>
                        <div className="detail">{item?.description?.for}</div>
                    </div>
                    <div className="sublist">
                        <div>Type</div>
                        <div className="detail">{item?.description?.type}</div>
                    </div>
                    <div className="sublist">
                        <div>Color/Favor</div>
                        <div className="detail">{item?.description?.color}</div>
                    </div>
                    <div className="sublist">
                        <div>Qty</div>
                        <div className="detail">
                            {item?.description?.quantity}
                        </div>
                    </div>
                </>

                {/* Payment */}
                <div>
                    <div className="headerorder">PAYMENT</div>
                    <div className="paymentdetail">
                        <div>Amount</div>
                        <div className="d-flex">
                            <div>{item?.payment?.amount?.price} ฿</div>
                            <div
                                className={
                                    item?.payment?.amount?.status
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
                            <div>{item?.payment?.tax?.price} ฿</div>
                            <div
                                className={
                                    item?.payment?.tax?.status
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
                                    item.status === 1
                                        ? '0%'
                                        : item.status === 2
                                        ? '25%'
                                        : item.status === 3
                                        ? '50%'
                                        : item.status === 4
                                        ? '75%'
                                        : item.status === 5
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
                                    item.status > 1 ? '#738c72' : '#42434730'
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
                                    item.status > 2 ? '#738c72' : '#42434730'
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
                                    item.status > 3 ? '#738c72' : '#42434730'
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
                                    item.status > 4 ? '#738c72' : '#42434730'
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
                    <div>{item.trackingNumber}</div>
                    <div className="headerordertracking">REMARK</div>
                    <div>{item.remark}</div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailAdmin;
