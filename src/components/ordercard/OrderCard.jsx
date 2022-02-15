import React from 'react';
import './ordercard.css';
import { Link } from 'react-router-dom';
import timeSince from '../../services/timeSince';

function OrderCard({ item }) {
    let unix_timestamp = item?.createdAt?.seconds;
    var date = new Date(unix_timestamp * 1000);

    return (
        <div className="ordercardcontainer" style={{ margin: '20px 0' }}>
            <div className="cardheader">
                <div className="cardheadercontent">NO.{item.number}</div>
                <div className="cardheadercontent">
                    {item.status === 5 ? 'DONE' : ''}
                </div>
            </div>
            <div className="textorder">ORDER : {item.description.type}</div>
            <div className="textdate">
                Date : {String(date).slice(3, 11)}, {String(date).slice(11, 15)}
            </div>
            <Link to={`/detail/${item.trackingNumber}`} className="link">
                Click for more details...
            </Link>
        </div>
    );
}

export default OrderCard;
