import { useEffect, useState } from "react"
import { getDoc,doc } from '@firebase/firestore'
import db from '../../firebase.js'
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props){

    const [productData, setProductData] = useState([])
    const {productId,brandTitle} = props;

    async function getProduct(){
        const productDoc = doc(db, brandTitle,productId)
        const productSnapshot = await getDoc(productDoc)
        setProductData(productSnapshot.data())
    }

    useEffect(() => {
        getProduct()
    },[])

    return(
        <div className="d-flex justify-content-center align-items-center">
            <ItemDetail productData={productData}/>
        </div>
    )
}