import ItemList from "./ItemList";
import '../../css/style.css'
import { useContext } from "react";
import { NavBarContext } from "../../context/NavBarContext";

export default function ItemListContainer (props){
    const {brandTitle} = props
    const {brandLogo} = useContext(NavBarContext)

    return (
        <div className="d-flex flex-column">
            <div className="item-list-container d-flex flex-column align-items-center">
                <img className="brand-logo" src={brandLogo} alt=""/>
                <div className="container">
                    <ItemList brandTitle={brandTitle}/>
                </div>
            </div>
        </div>

    );
}