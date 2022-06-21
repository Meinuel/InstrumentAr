import '../../css/style.css'
import CategorieBrandsContainer from './CategorieBrandsContainer'

export default function Categories(props) {

    const {categorie} = props
    
    return (
        <div className={categorie.style}>
            <div className="animate__animated animate__fadeInUp">
                <h3>{categorie.categorieTitle}</h3>
            <img className="img-opacity" src={categorie.img} alt="img" />
            </div>
            <CategorieBrandsContainer categorie={categorie}/>
        </div>
    )
}