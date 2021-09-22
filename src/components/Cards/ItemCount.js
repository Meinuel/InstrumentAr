import React,{useState} from 'react';
import './ItemCount.css';

export default function ItemCount (){
    const [cantidad, setCantidad] = useState(0)
    const agregarCantidad = (operacion) => {
        if(!operacion && cantidad === 0){

        }else{
            operacion ? setCantidad(cantidad + 1) : setCantidad(cantidad - 1);
        }
    }
    return (
        <div className="d-flex justify-content-evenly bg-light">
            <button className="my-btn" onClick={() => agregarCantidad(false)}>-</button>
            <div>{cantidad}</div>
            <button className="my-btn" onClick={() => agregarCantidad(true)}>+</button>
        </div>
    )
}