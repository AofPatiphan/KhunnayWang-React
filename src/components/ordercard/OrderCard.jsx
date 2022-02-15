import React from 'react';
import './ordercard.css';
import { Link } from 'react-router-dom';
import timeSince from '../../services/timeSince';

function OrderCard({ item }) {
    return (
        <div className="ordercardcontainer">
            <div className="cardheader">
                <div className="cardheadercontent">NO.{item.number}</div>
                <div className="cardheadercontent">
                    {item.status === 5 ? 'DONE' : ''}
                </div>
            </div>
            <div className="textorder">ORDER : {item.description.type}</div>
            <div className="textdate">
                Date : {timeSince(item.createdAt.seconds)}
            </div>
            <Link to={`/detail/${item.trackingNumber}`} className="link">
                Click for more details...
            </Link>
        </div>
    );
}

export default OrderCard;
