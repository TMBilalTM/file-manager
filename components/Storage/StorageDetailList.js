import React, { useEffect, useState } from 'react';
import { firestore } from '../../Config/FirebaseConfig'; // Firebase yapılandırma dosyanızı import edin
import StorageDetailItem from './StorageDetailItem';

function StorageDetailList() {
    const [storageList, setStorageList] = useState([]);

    useEffect(() => {
        const fetchStorageList = async () => {
            try {
                const storageCollection = await firestore.collection('storage').get();
                const storageData = storageCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setStorageList(storageData);
            } catch (error) {
                console.error('Error fetching storage data:', error);
            }
        };

        fetchStorageList();
    }, []);

    return (
        <>
            {storageList.map((item) => (
                <StorageDetailItem item={item} key={item.id} />
            ))}
        </>
    );
}

export default StorageDetailList;
