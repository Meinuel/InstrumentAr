import CartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

const {cartProducts} = useContext(CartContext)

    return (
        <div className="d-flex">
            <p>{`(${cartProducts.length})`}</p>
            <a href="https://www.mercadolibre.com/"><img className="img-carro" src={CartIcon} alt="dazos"/></a>
        </div>
    )
}

export default CartWidget;