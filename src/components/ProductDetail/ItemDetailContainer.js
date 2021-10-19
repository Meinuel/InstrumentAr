import { useEffect, useState } from "react"
import { collection } from '@firebase/firestore'
import db from '../../firebase.js'
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props){

    const [productData, setProductData] = useState([])
    const {productId} = props;

    useEffect(() => {
        console.log(productId)
        const productCol = collection(db, 'products')
        const product = productCol.where('id', '===' , productId)
        product.get().then((productSnapshot) => {
            if(productSnapshot.size === 0) {
                console.log('No hubo resultados')
            }
            setProductData(productSnapshot.map(doc => doc.data()))
        })
    },[])

    return(
        <ItemDetail productData={productData}/>
    )
}