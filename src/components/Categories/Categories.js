import '../../css/style.css'
import CategorieBrandsContainer from './CategorieBrandsContainer'

export default function Categories(props) {

    const { categorieTitle, style, img, brands } = props
    
    return (
        <div className={style}>
            <div className="animate__animated animate__fadeInUp">
                <h3>{categorieTitle}</h3>
            <img className="img-opacity" src={img} alt="img" />
            </div>
            <CategorieBrandsContainer brands={brands}/>
        </div>
    )
}