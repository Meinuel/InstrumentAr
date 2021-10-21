import { useEffect, useState } from "react"
import { getDoc,doc } from '@firebase/firestore'
import db from '../../firebase.js'
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props){

    const [productData, setProductData] = useState([])
    const {productId,brandTitle} = props;

    async function getProduct(){
        console.log(productId)
        console.log(brandTitle)
        const productDoc = doc(db, brandTitle,productId)
        const productSnapshot = await getDoc(productDoc)
        console.log(productSnapshot.data())
        setProductData(productSnapshot.data())
    }


    useEffect(() => {
        getProduct()
    },[])

    return(
        <ItemDetail productData={productData}/>
    )
}