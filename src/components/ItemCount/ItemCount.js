import React,{useState} from "react";

export default function ItemCount (props){
    const {stock,initValue} = props;
    const [cantidad, setCantidad] = useState(initValue)
    const agregarCantidad = () => {
        if(cantidad < stock)
        setCantidad(cantidad + 1) ;
        }
        
    const restarCantidad = () => {
        if(cantidad > 0)
        setCantidad(cantidad -1)
    }
    return (
        <div>
            <div className="d-flex justify-content-evenly bg-light">
                <button className="count-btn" onClick={restarCantidad}>-</button>
                <div>{cantidad}</div>
                <button className="count-btn" onClick={agregarCantidad}>+</button>
            </div>
            <button className="card-btn">Agregar al carrito</button>
        </div>

    )
}