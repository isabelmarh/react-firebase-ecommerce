import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { getFirestore } from './firebase'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId = undefined} = useParams();   

    useEffect(() => {
        const db = getFirestore();
        let itemCollection = db.collection("items");
        if(categoryId) { 
            itemCollection = itemCollection.where('categoryId', '==', categoryId)
         }
     
         itemCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results');
                }
                setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            })
            .catch((error) => {
                console.log("Error searching items", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);


    return (
        loading ?
            (
                <div className="spinner"><CircularProgress/></div>
            ) : (
                <>
                <h1 style={{ margin: "14px", textAlign: 'center' }}>
                    Categoria de productos: {categoryId}</h1>
                    <div className="products-container">
                        {products.map((product) => (
                            <ItemDetail product={product}
                            />
                        ))}
                    </div>
                </>
            ))
}

export default ItemList;