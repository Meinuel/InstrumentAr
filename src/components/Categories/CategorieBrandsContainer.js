import { useEffect } from 'react'
import '../../css/style.css'
import Brand from './Brand'

export default function CategorieBrandsContainer(props){
const {brands} = props
return(
    <div className="container-brands">
        {
            brands.map(({title,img}) => (<Brand img={img} title={title}/>))
        }
    </div>
)
}