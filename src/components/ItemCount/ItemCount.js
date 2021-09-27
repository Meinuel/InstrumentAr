import React,{useState} from "react";
export default function ItemCount (){
    const [cantidad, setCantidad] = useState(0)
    const agregarCantidad = () => {
        setCantidad(cantidad + 1) ;
        }
        
    const restarCantidad = () => {
        if(cantidad > 0)
        setCantidad(cantidad -1)
    }
    return (
        <div className="d-flex justify-content-evenly bg-light">
            <button className="count-btn" onClick={restarCantidad}>-</button>
            <div>{cantidad}</div>
            <button className="count-btn" onClick={agregarCantidad}>+</button>
        </div>
    )
}