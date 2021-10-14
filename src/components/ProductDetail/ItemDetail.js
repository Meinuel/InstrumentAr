import {useState,useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../../css/style.css'
import Button from 'react-bootstrap/Button'
import {CartContext} from '../../context/CartContext'

export default function ItemDetail(props){

    const [quantity,setQuantity] = useState(1)

    const {addCartProduct} = useContext(CartContext)

    const {productData} = props

    const onAdd = () => {
        quantity < productData['available_quantity'] && setQuantity(quantity + 1)
    }

    const onRemove = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    return(
        <div className="d-flex flex-column align-items-center">
            <img src={productData['thumbnail']} alt="product img" className="item-img"/>
            <div>{productData['title']}</div>
            <div>Stock : {productData['available_quantity']}</div>
            <div>Precio : {productData['price']}$</div>
            <ItemCount quantity={quantity} onAdd={onAdd} onRemove={onRemove}/>
            <Button onClick={() => addCartProduct({id:productData['id'],name:productData['title'], price:productData['price'], quantity:quantity})} variant="primary">Terminar mi compra</Button>
        </div>
    )
}