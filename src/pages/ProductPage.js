import ItemListContainer from "../components/Cards/ItemListContainer";
import { useParams } from "react-router";
import MyNavBar from "../components/NavBar/NavBar";

export default function ProductPage(){
    const {query} = useParams();
    return (
        <div>
            <MyNavBar/>
            {/* <BrandContainer/> */}
            <ItemListContainer query={query}/>
        </div>
    )
}