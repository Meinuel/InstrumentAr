import React, { useState, useEffect } from 'react'
import db from '../../firebase.js'
import { collection, getDocs } from '@firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'
import Item from './Item';
import '../../css/style.css';

export default function ItemList(props) {

    const { brandTitle } = props
    const [products, setProducts] = useState([])

    async function getProducts(db) {
        console.log(brandTitle)
        const productsCol = collection(db, brandTitle)
        const productsSnapshot = await getDocs(productsCol)
        const products = productsSnapshot.docs.map(doc => doc.data())
        console.log(products)
        setProducts(products)
    }

    useEffect(() => {
        getProducts(db)
    }, [brandTitle]);

    return ( <div className = "row" > {
            products.length === 0 ? <Spinner className = "m-auto" animation = "grow"/> : products.map(
                ({ title, img, id }) => ( 
                <div className = "col-md-4" > 
                    <Item title={title} img={img} id={id} brandTitle={brandTitle}/>
                </div> )
            )
        } </div>
    )
}