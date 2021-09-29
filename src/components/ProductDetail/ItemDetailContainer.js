import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
export default function ItemDetailContainer(props){
    const API_URL = 'https://api.mercadolibre.com'
    const [productData, setProductData] = useState([])
    const {productId} = props;
    useEffect(() => {
        fetch(`${API_URL}/items?ids=${productId}`)
            .then(res => res.json()).then(data => setProductData(data['0']['body']))
    },[])

    return(
            <ItemDetail productData={productData}/>
    )
}