import ItemListContainer from "../components/Cards/ItemListContainer";
import { useParams } from "react-router";
import MyNavBar from "../components/NavBar/NavBar";

export default function ProductPage(){
    const {brandTitle} = useParams();
    return (
        <div>
            <MyNavBar isHome={false}/>
            {/* <BrandContainer/> */}
            <ItemListContainer brandTitle={brandTitle}/>
        </div>
    )
}