import {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'
import Button from 'react-bootstrap/Button'
export default function ItemDetail(props){
    const [quantity,setQuantity] = useState(0)
    const {productData} = props
    const onAdd = () => {
        quantity < productData['available_quantity'] && setQuantity(quantity + 1)
    }
    const onRemove = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }
    return(
        <div className="d-flex flex-column align-items-center">
            <img src={productData['thumbnail']} alt="product img" className={styles.itemImg}/>
            <div>{productData['title']}</div>
            <div>Stock : {productData['available_quantity']}</div>
            <div>Precio : {productData['price']}$</div>
            <ItemCount quantity={quantity} onAdd={onAdd} onRemove={onRemove}/>
            <Link to="/cart"><Button variant="primary">Agregar al carrito</Button></Link>
        </div>
    )
}