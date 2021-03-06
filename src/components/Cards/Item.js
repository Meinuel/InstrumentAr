import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import '../../css/style.css';

export default function Item (props) {

    const {title,img,id,brandTitle} = props;
    
    return (
    <div className="d-flex flex-column align-items-center card animate__animated animate__fadeInUp mt-4">
        <div className="overflow-hidden">
            <img className="card-img-top" src={img} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-between align-items-centers card-body text-dark">
            <h5>{title}</h5>
            <Link className="card-link" to={`/productDetail/${id}/${brandTitle}`}>Ver Producto <FontAwesomeIcon icon={faEye}/></Link>   
        </div>
    </div>
    )
    }
