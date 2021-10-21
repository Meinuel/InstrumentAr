import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from '@firebase/firestore'
import db from '../../firebase.js'
import '../../css/style.css'
import { CartContext } from  '../../context/CartContext'


export default function CartDetail(){
    
    const {cartProducts,clearCartProducts,removeCartProduct} = useContext(CartContext)
    const calculateTotal = products => products.reduce((prev, acc) => prev + acc.price*acc.quantity, 0)
    const newOrder = {
        buyer: {
            name:'Manuel Gonzalez',
            phone:'1553154948',
            mail:'sieteoctavos78@gmail.com'
        },
        item: cartProducts,
        total: calculateTotal(cartProducts)
    }
    const generateOrder = async () => {
        const orderFirebase = collection(db, 'ordenes')
        const order = await addDoc(orderFirebase,newOrder)
        console.log(order.id)
    }

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
                    <button onClick={generateOrder}>Generar Orden</button>
                </div> 
            :   <div>
                    <h1>No tenes productos en la canasta</h1>
                    <Link to='/'><div>Volver a la tienda!</div></Link>
                </div>}
        </div>
    )
}