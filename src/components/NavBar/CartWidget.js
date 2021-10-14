import CartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

const {cartProducts} = useContext(CartContext)

    return (
        <div className="d-flex">
            <p>{`(${cartProducts.length})`}</p>
            <Link to="/cart"><img className="img-carro" src={CartIcon} alt="dazos"/></Link>
        </div>
    )
}

export default CartWidget;