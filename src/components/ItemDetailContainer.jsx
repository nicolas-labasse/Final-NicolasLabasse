import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, getDoc, collection,doc } from "firebase/firestore"
import Loading  from "./Loading" 

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const productoDocRef = doc(itemsCollection, id);
      
        getDoc(productoDocRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const producto = { id: docSnapshot.id, ...docSnapshot.data() };
              setItem(producto);
              setLoading(false);
            } 
          })
      }, [id]);

    return (
        <>
           { loading ? <Loading /> :<ItemDetail producto={item}/> }
        </>
    )
}

export default ItemDetailContainer