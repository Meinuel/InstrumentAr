import {createContext, useState} from 'react'

const CartContext = createContext();

const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([])

    const addCartProduct = (product) => {
        if(cartProducts.length === 0){
            setCartProducts([product])
            console.log('Hola')
        }else{
            let isDuplicate = false
            for (const key in cartProducts) {
                if(cartProducts[key]['id'] === product['id']){
                    isDuplicate = true
                }
            }
            !isDuplicate && setCartProducts([...cartProducts,product])
            console.log(`El producto ${product['name']} ya se encuentra en el carrito`)
        }
    }

    const data = {
        cartProducts,
        addCartProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    ) 
}
export { CartProvider };
export default CartContext;
