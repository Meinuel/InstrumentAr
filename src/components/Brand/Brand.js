import { Link } from 'react-router-dom'
export default function Brand(props){
    const {query,img,title} = props
    return(
        <Link to={`/product/${query}`}><img className="img-resize" src={img} alt="brand" /></Link>
    )
}