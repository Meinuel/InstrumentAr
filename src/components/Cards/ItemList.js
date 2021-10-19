import React, { useState, useEffect } from 'react'
import db from '../../firebase.js'
import { collection, getDocs } from '@firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'
import Item from './Item';
import '../../css/style.css';

export default function ItemList(props) {
    const API_URL = 'https://api.mercadolibre.com/sites/MLA'
    const { query } = props
    const [products, setProducts] = useState([])

    async function getProducts(db) {
        const productsCol = collection(db, 'products')
        const productsSnapshot = await getDocs(productsCol)
        const products = productsSnapshot.docs.map(doc => doc.data())
        console.log(products)
        setProducts(products)
    }

    useEffect(() => {
        getProducts(db)
    }, [query]);

    return ( <div className = "row" > {
            products.length === 0 ? <Spinner className = "m-auto" animation = "grow"/> : products.map(
                ({ title, price, stock, img }) => ( 
                <div className = "col-md-4" > 
                    <Item title={title} price={price} stock={stock} img={img}/>
                </div> )
            )
        } </div>
    )
}