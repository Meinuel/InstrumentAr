import '../../css/style.css'
import Brand from './Brand'

export default function CategorieBrandsContainer(props){
const {categorie} = props
return(
    <div className="container-brands">
        {
            categorie.brands.map(({brandTitle,img}) => (<Brand img={img} brandTitle={brandTitle} categorie={categorie}/>))
        }
    </div>
)
}