// StorageDetailList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../Config/FirebaseConfig';
import StorageDetailItem from './StorageDetailItem';

function StorageDetailList() {
  const [storageList, setStorageList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStorageList = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'storage'));
        const storageData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setStorageList(storageData);
      } catch (error) {
        console.error('Error fetching storage data:', error);
        setError('Failed to fetch storage data.');
      }
    };

    fetchStorageList();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {storageList.map((item, index) => (
        <StorageDetailItem item={item} key={index} />
      ))}
    </>
  );
}

export default StorageDetailList;
