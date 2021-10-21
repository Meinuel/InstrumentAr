import { useParams } from "react-router";
import MyNavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ProductDetail/ItemDetailContainer";
export default function ProductDetailPage(){
    const { productId, brandTitle } = useParams();
    return (
        <div>
            <MyNavBar/>
            <ItemDetailContainer productId={productId} brandTitle={brandTitle}/>
        </div>
    )
}