import { Link } from 'react-router-dom'
export default function Brand(props){
    const {brandTitle,img} = props
    return(
        <Link to={`/product/${brandTitle}`}><img className="img-resize" src={img} alt="brand" /></Link>
    )
}