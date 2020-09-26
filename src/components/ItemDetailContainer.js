import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getFirestore } from './firebase'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const itemId = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = db.collection("items").doc(itemId.id);
        
        itemRef.get().then((doc) => {
                if (!doc.exists) {
                    console.log('item does not exist');
                    return;
                }
                console.log('item found');
                setItem({
                    id: doc.id,
                    ...doc.data()});
                }).catch((error) => {
                    console.log('error searching item', error);
                }).finally(() => {
                    setLoading(false);
                });
    }, [itemId.id]);

    return (
        <div>
            {loading ?
                <div className="spinner"> 
                <CircularProgress /> 
                </div>
                :
                <Item item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer;
