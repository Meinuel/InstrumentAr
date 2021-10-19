import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import '../../css/style.css'

const CartWidget = () => {

const {cartProducts} = useContext(CartContext)

    return (
        <div className="d-flex">
            <Link to="/cart"><FontAwesomeIcon className="img-carro" icon={faCartPlus}/></Link>
            <div className="container-amount">{`(${cartProducts.length})`}</div>
        </div>
    )
}

export default CartWidget;