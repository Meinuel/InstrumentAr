import {createContext, useState} from 'react'

const CartContext = createContext();

const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setPrice] = useState(0)

    const addCartProduct = (product) => {
        setPrice(totalPrice + (product.price * product.quantity))
        if(cartProducts.length === 0){
            setCartProducts([product])
        }else{
            let isDuplicate = false
            for (const key in cartProducts) {
                if(cartProducts[key]['id'] === product.id){
                    isDuplicate = true
                }
            }
            !isDuplicate && setCartProducts([...cartProducts,product])
            console.log(`El producto ${product.name} ya se encuentra en el carrito`)
        }
    }

    const removeCartProduct = (i) => {
        setPrice(totalPrice - (cartProducts[i].price * cartProducts[i].quantity))
        setCartProducts(cartProducts.filter(item =>
            cartProducts.indexOf(item) !== i && item))
    }

    const clearCartProducts = () => {
        setCartProducts([])
    }
    const data = {
        cartProducts,
        addCartProduct,
        clearCartProducts,
        removeCartProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    ) 
}
export { CartProvider, CartContext };
