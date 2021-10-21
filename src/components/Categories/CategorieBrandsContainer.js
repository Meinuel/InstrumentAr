import '../../css/style.css'
import Brand from './Brand'

export default function CategorieBrandsContainer(props){
const {brands} = props
return(
    <div className="container-brands">
        {
            brands.map(({brandTitle,img}) => (<Brand img={img} brandTitle={brandTitle}/>))
        }
    </div>
)
}