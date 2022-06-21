import ItemListContainer from "../Cards/ItemListContainer"
import '../../css/style.css'

export default function CategorieContainer () {
    return(
        <div className="d-flex flex-column align-items-center categorie-container">
            <h1>Ukeleles</h1>
            <ItemListContainer query={'ukelele'}/>
        </div>
    )
}