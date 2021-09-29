import React, {useState,useEffect} from 'react'
import Item from './Item';
import './ItemList.css'

export default function ItemList(props){
    const API_URL = 'https://api.mercadolibre.com/sites/MLA'
    const {query} = props
    const [products,setProducts] = useState([]) 
    useEffect(()=>{
        console.log(`${API_URL}/search?q=${query}`)
        fetch(`${API_URL}/search?q=${query}`)
            .then((res) => res.json())
                .then((json) => setProducts(json['results']))
                    .catch((err) => {console.log(err.toString())})
    },[]);
    return (
        <div className="row">
        {products === null ? <p>Espere...</p> :
            products.map(
                ({ title, price, available_quantity, thumbnail, id }) => (<div className="col-md-4 item-list"><Item id={id} title={title} price={price} stock={available_quantity} image={thumbnail} /></div>)
            )
        }
        </div>
    )
}