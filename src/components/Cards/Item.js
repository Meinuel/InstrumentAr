import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item (props) {

    const {id,title,image} = props;
    return (
    <div className="card animate__animated animate__fadeInUp">
        <div className="overflow-hidden">
            <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="card-body text-dark">
            <h5>{title}</h5>
            <Link to={`/productDetail/${id}`}><button variant="dark">Ver Producto</button></Link>   
        </div>
    </div>
    )
    }
