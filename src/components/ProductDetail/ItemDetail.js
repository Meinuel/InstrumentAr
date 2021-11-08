import {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../../css/style.css'
import {CartContext} from '../../context/CartContext'

export default function ItemDetail(props){

    const [quantity,setQuantity] = useState(1)
    const [isAdded, setAdd] = useState(false)
    const {addCartProduct} = useContext(CartContext)
    const {productData} = props

    const onAdd = () => {
        quantity < productData.stock && setQuantity(quantity + 1)
    }

    const onRemove = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    const addToCart = () => {
        addCartProduct({id:productData.id,name:productData.title, price:productData.price, quantity:quantity})
        setAdd(!isAdded)
    }

    return(
        <div className="d-flex justify-content-center item-detail">
            <img src={productData.img} alt="product img" className="item-img"/>
            <div className="d-flex flex-column justify-content-evenly align-items-center data-product-container">
                <div>{productData.title}</div>
                <div>Stock : {productData.stock}</div>
                <div>Precio : {productData.price}$</div>
                <ItemCount quantity={quantity} onAdd={onAdd} onRemove={onRemove}/>
                {
                    isAdded ? <Link to='/cart'><button className="btn-cart" variant="primary">Terminar mi compra</button></Link> 
                            : <button className="btn-cart" onClick={addToCart} variant="primary">Agregar al carrito</button>
                }
            </div>
        </div>
    )
}