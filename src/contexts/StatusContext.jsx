import { createContext, useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const StatusContext = createContext();

function StatusContextProvider(props) {
    const [docs, setDocs] = useState([]);
    const [docsAdmin, setDocsAdmin] = useState([]);
    const [docsDetail, setDocsDetail] = useState([]);
    const [user, setUser] = useState('');
    const [number, setNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [forr, setForr] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amountPrice, setAmountPrice] = useState('');
    const [amountStatus, setAmountStatus] = useState('');
    const [freightPrice, setFreightPrice] = useState('');
    const [freightStatus, setFreightStatus] = useState('');
    const [status, setStatus] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');
    const [remark, setRemark] = useState('');
    const [username, setUsername] = useState('');
    const [tracking, setTracking] = useState('');

    const createData = {
        number: number,
        date: new Date(),
        brand: brand,
        description: {
            for: forr,
            type: type,
            color: color,
            quantity: quantity,
        },
        payment: {
            amount: {
                price: amountPrice,
                status: !!(amountStatus === 'true' || amountStatus === true
                    ? 1
                    : 0),
            },
            tax: {
                price: freightPrice,
                status: !!(freightStatus === 'true' || freightStatus === true
                    ? 1
                    : 0),
            },
        },
        status: +status,
        trackingNumber: trackingNumber,
        remark: remark,
        createdAt: timestamp(),
        username: username,
    };

    const createOrder = async () => {
        await projectFirestore.collection('order').add(createData);
        setNumber('');
        setBrand('');
        setForr('');
        setType('');
        setColor('');
        setQuantity('');
        setAmountPrice('');
        setAmountStatus('');
        setFreightPrice('');
        setFreightStatus('');
        setStatus('');
        setTrackingNumber('');
        setRemark('');
        setUsername('');
    };

    const updateOrder = async (
        editAmountStatus,
        editFreightStatus,
        editStatus,
        editRemark,
        editamountPrice,
        editfreightPrice,
        id
    ) => {
        await projectFirestore
            .collection('order')
            .doc(id)
            .update({
                payment: {
                    amount: {
                        price: editamountPrice,
                        status: !!(editAmountStatus === 'true' ||
                        editAmountStatus === true
                            ? 1
                            : 0),
                    },
                    tax: {
                        price: editfreightPrice,
                        status: !!(editFreightStatus === 'true' ||
                        editFreightStatus === true
                            ? 1
                            : 0),
                    },
                },
                status: editStatus,
                remark: editRemark,
            });
        fetchStatusAdmin();
    };

    const deleteOrder = async (id) => {
        await projectFirestore.collection('order').doc(id).delete();
        fetchStatusAdmin();
    };

    const fetchStatus = async () => {
        // let userIdTemp = '';

        // const querySnapshot = await projectFirestore
        //     .collection('users')
        //     .where('name', '==', user)
        //     .get();

        // querySnapshot.forEach((doc) => {
        //     userIdTemp = doc.id;
        // });
        try {
            const querySnapshot = await projectFirestore
                .collection('order')
                .where('username', '==', user)
                .orderBy('createdAt', 'desc')
                .get();

            let documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        } catch (error) {
            console.log('Error getting documents: ', error);
        }
    };

    const fetchStatusAdmin = async () => {
        projectFirestore
            .collection('order')
            .where('trackingNumber', '==', tracking)
            .get()
            .then((querySnapshot) => {
                let documents = [];

                querySnapshot.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocsAdmin(documents);
            })
            .catch((error) => {
                console.log('Error getting documents: ', error);
            });
    };

    const fetchDetail = async (trackingNo) => {
        projectFirestore
            .collection('order')
            .where('trackingNumber', '==', trackingNo)
            .get()
            .then((querySnapshot) => {
                let documents = [];

                querySnapshot.forEach((doc) => {
                    documents = doc.data();
                });
                setDocsDetail(documents);
            })
            .catch((error) => {
                console.log('Error getting documents: ', error);
            });
    };

    return (
        <StatusContext.Provider
            value={{
                fetchStatus,
                fetchStatusAdmin,
                user,
                setUser,
                docs,
                docsAdmin,
                fetchDetail,
                docsDetail,
                number,
                setNumber,
                brand,
                setBrand,
                forr,
                setForr,
                type,
                setType,
                color,
                setColor,
                quantity,
                setQuantity,
                amountPrice,
                setAmountPrice,
                amountStatus,
                setAmountStatus,
                freightPrice,
                setFreightPrice,
                freightStatus,
                setFreightStatus,
                status,
                setStatus,
                trackingNumber,
                setTrackingNumber,
                remark,
                setRemark,
                username,
                setUsername,
                createOrder,
                updateOrder,
                tracking,
                setTracking,
                deleteOrder,
            }}
        >
            {props.children}
        </StatusContext.Provider>
    );
}

export default StatusContextProvider;
export { StatusContext };
