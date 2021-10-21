import { Link } from 'react-router-dom';
import '../../css/style.css';

export default function Item (props) {

    const {title,img,id,brandTitle} = props;
    
    return (
    <div className="card animate__animated animate__fadeInUp">
        <div className="overflow-hidden">
            <img className="card-img-top" src={img} alt="" />
        </div>
        <div className="card-body text-dark">
            <h5>{title}</h5>
            <Link to={`/productDetail/${id}/${brandTitle}`}><button variant="dark">Ver Producto</button></Link>   
        </div>
    </div>
    )
    }
