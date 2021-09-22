import React,{useState} from 'react';
import './Card.css';

const Card = (props) => {
    const [cantidad, setCantidad] = useState(0)
    const agregarCantidad = (operacion) => {
        if(!operacion && cantidad === 0){

        }else{
            operacion ? setCantidad(cantidad + 1) : setCantidad(cantidad - 1);
        }
    }
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
        <div className="d-flex justify-content-evenly bg-light">
            <button className="count-btn" onClick={() => agregarCantidad(false)}>-</button>
            <div>{cantidad}</div>
            <button className="count-btn" onClick={() => agregarCantidad(true)}>+</button>
        </div>
        <button className="card-btn">Agregar al carrito</button>
    </div>
    )
    }
export default Card;