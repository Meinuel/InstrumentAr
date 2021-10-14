import {createContext, useState} from 'react'

const CartContext = createContext();

const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([])

    const addCartProduct = (product) => {
        if(cartProducts.length === 0){
            setCartProducts([product])
        }else{
            let isDuplicate = false
            for (const key in cartProducts) {
                if(cartProducts[key]['id'] === product['id']){
                    isDuplicate = true
                }
            }
            !isDuplicate && setCartProducts([...cartProducts,product])
            console.log(`El producto ${product['name']} ya se encuentra en el carrito`)
            console.log(cartProducts)
        }
    }

    const removeCartProduct = (i) => {
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
