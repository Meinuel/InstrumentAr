import { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from '@firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from  '../../context/CartContext'
import db from '../../firebase.js'
import '../../css/style.css'
import OrderResponse from '../OrderResponse/OrderResponse.js'
import Spinner from 'react-bootstrap/Spinner'
import { UserContext } from '../../context/UserContext'
import { signInWithRedirect } from '@firebase/auth'


export default function CartDetail(){
    
    const {cartProducts,clearCartProducts,removeCartProduct} = useContext(CartContext)
    const {user,SignInWithFirebase} = useContext(UserContext)
    const [orderRsp,setOrderRsp] = useState()
    const [isOrdered, setIsOrdered] = useState(false)

    const calculateTotal = products => products.reduce((prev, acc) => prev + acc.price*acc.quantity, 0)

    const generateOrder = async () => {
        const newOrder = {
            buyer: {
                name : user.displayName,
                mail:  user.email
            },
            item: cartProducts,
            total: calculateTotal(cartProducts)
        }
        setIsOrdered(true)
        const orderFirebase = collection(db, 'ordenes')
       // const order = await addDoc(orderFirebase,newOrder)
        addDoc(orderFirebase,newOrder).then( order => {
            clearCartProducts()
            order && setOrderRsp(order)
        }).catch(err => {
            console.log(err)
        })

    }

    return(
        <div className="cart-page-container">
            {!isOrdered ? cartProducts.length > 0 ? 
                    <div className="cart-products-container">
                        <h1>Detalle de compra</h1>
                        {cartProducts.map(({name,price,quantity}, i)=>(
                            <div>
                                <span>{`${name} - ${price*quantity}$ - Cantidad : ${quantity}`}</span>
                                <span><FontAwesomeIcon onClick={() => removeCartProduct(i)} icon={faTrash}/></span>
                            </div>
                            ))}
                            <h4>{`${calculateTotal(cartProducts)} $`}</h4>
                            <div>
                                <button className="btn-cart btn-margin" onClick={clearCartProducts}>Limpiar canasta</button>
                                <button className="btn-cart btn-margin" onClick={user ? generateOrder : SignInWithFirebase}>Generar Orden</button>
                            </div>
                    </div> 
                :   <div>
                        <h1>No tenes productos en la canasta</h1>
                        <Link to='/'><div>Volver a la tienda!</div></Link>
                    </div>
            :   orderRsp ? <OrderResponse orderRsp={orderRsp}/> : <Spinner className = "m-auto" animation = "grow"/>
                }
        </div>
    )
}