import './Card.css';
import ItemCount from './ItemCount';
const Card = (props) => {
    const {title,price,image} = props;
    return (
    <div className="card animate__animated animate__fadeInUp">
        <div className="overflow-hidden">
            <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="card-body text-dark">
            <h4>{title}</h4>
            <p>{price}
            </p> 
        </div>
        <ItemCount/>
        <button className="card-button">Agregar al carrito</button>
    </div>
    )
    }
export default Card;