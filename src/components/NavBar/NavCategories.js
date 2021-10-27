import { useContext } from "react"
import { NavBarContext } from "../../context/NavBarContext"
import '../../css/style.css'

export default function NavCategories (){

    const {activateCategorie,categories} = useContext(NavBarContext)

    return (
        <ul className="nav-pages">
            {
                categories.map(categorie => <li><button className="nav-btn-a animate__animated animate__bounceInLeft" onClick={() => activateCategorie(categorie)}>{categorie.categorieTitle}</button></li>)
            }
        </ul>
    )
}