import '../../css/style.css'
import Brand from './Brand'
export default function CategorieBrandsContainer(props){
const {brands} = props
return(
    <div className="container-brands">
        {
            brands.map(({title,img,query}) => (<Brand query={query} img={img} title={title}/>))
        }
    </div>
)
}