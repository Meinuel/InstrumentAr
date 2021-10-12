import '../../css/style.css'
import CategorieBrands from './CategorieBrandsContainer'

export default function Categories(props) {
    const { title, style, img, brands } = props
    return (
        <div className={style}>
            <div className="animate__animated animate__fadeInUp">
                <h3>{title}</h3>
                <img className="img-opacity" src={img} alt="img" />
            </div>
            <CategorieBrands brands={brands}/>
        </div>
    )
}