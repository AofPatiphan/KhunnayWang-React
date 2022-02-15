import { createContext, useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const StatusContext = createContext();

function StatusContextProvider(props) {
    const [docs, setDocs] = useState([]);
    const [docsDetail, setDocsDetail] = useState([]);
    const [user, setUser] = useState('');

    const fetchStatus = async () => {
        let userIdTemp = '';

        const querySnapshot = await projectFirestore
            .collection('users')
            .where('name', '==', user)
            .get();

        querySnapshot.forEach((doc) => {
            userIdTemp = doc.id;
        });

        console.log('userId: ', userIdTemp);
        projectFirestore
            .collection('order')
            .where('userId', '==', userIdTemp)
            .get()
            .then((querySnapshot) => {
                let documents = [];

                querySnapshot.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
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

    console.log(docsDetail);

    return (
        <StatusContext.Provider
            value={{
                fetchStatus,
                user,
                setUser,
                docs,
                fetchDetail,
                docsDetail,
            }}
        >
            {props.children}
        </StatusContext.Provider>
    );
}

export default StatusContextProvider;
export { StatusContext };
