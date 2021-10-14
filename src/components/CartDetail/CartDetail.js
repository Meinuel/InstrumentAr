import { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../css/style.css'
import { CartContext } from  '../../context/CartContext'


export default function CartDetail(){
    
    const {cartProducts,clearCartProducts,removeCartProduct} = useContext(CartContext)

    const calculateTotal = products => { 
        let precio = 0
        for (let index = 0; index < products.length; index++) {
            const element = products[index].price;
            precio = precio + element
        }
        return precio}
    return(
        <div className="container-cart-page">
            {cartProducts.length > 0 ? 
                <div>
                    <h1>Detalle de compra</h1>
                    {cartProducts.map(({name,price,quantity}, i)=>(
                        <div>
                            <span>{`⚫ ${name} - ${price*quantity}$ - Cantidad : ${quantity}`}</span>
                            <span><button onClick={() => removeCartProduct(i)}>X</button></span>
                        </div>
                        ))}
                        <h4>{calculateTotal(cartProducts)}</h4>
                    <button onClick={clearCartProducts}>Limpiar canasta</button>
                </div> 
            :   <div>
                    <h1>No tenes productos en la canasta</h1>
                    <Link to='/'><div>Volver a la tienda!</div></Link>
                </div>}
        </div>
    )
}