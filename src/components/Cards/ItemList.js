import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Item from './Item';
import '../../css/style.css';

export default function ItemList(props) {
    const API_URL = 'https://api.mercadolibre.com/sites/MLA'
    const { query } = props
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(`${API_URL}/search?q=${query}`)
        fetch(`${API_URL}/search?q=${query}`)
            .then((res) => res.json())
            .then((json) => {
                const filtered = [json['results'][0], json['results'][1], json['results'][2], json['results'][3], json['results'][4], json['results'][5]]
                setProducts(filtered)
            })
            .catch((err) => { console.log(err.toString()) })
    }, [query]);
    return ( 
        <div className="row"> {
            products.length === 0 ? <Spinner className="m-auto" animation="grow" /> :
            products.map(
                ({ title, price, available_quantity, thumbnail, id }) => ( <div div className = "col-md-4" > < Item id = { id }
                    title = { title }
                    price = { price }
                    stock = { available_quantity }
                    image = { thumbnail }
                    /></div > )
            )
        }
        </div>
    )
}