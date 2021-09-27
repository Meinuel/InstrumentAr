import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import './Item.css';

export default function Item (props) {

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
        <button className="card-btn">Agregar al carrito</button>
    </div>
    )
    }
