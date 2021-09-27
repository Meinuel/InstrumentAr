import React,{useEffect,useState} from 'react'
import Item from './Item';
import gibsonSG from '../../assets/sg.jpg';
import stratocaster from '../../assets/strato.jpg';
import lesPaul from '../../assets/lespaul.jpg'

export default function ItemList(){
    const [products,setProducts] = useState([]) 
    const getProducts = new Promise((resolve,reject) => {
        setTimeout(() => {
            const productos = [
                {title : 'Gibson SG' , price: '3000$', image : gibsonSG},
                {title : 'Stratocaster' , price : '2000$', image : stratocaster},
                {title : 'Les Paul' , price : '3500$', image : lesPaul}]
                resolve(productos)
        }, 1000)
    })
    useEffect(()=>{
        getProducts.then((products)=>{
            setProducts(products)
        })
    },[])
    return (
        <div className="row">
        {
            products.map(
                ({ title, price, image }) => (<div className="col-md-4"><Item title={title} price={price} image={image} /></div>)
            )
        }
        </div>
    )
}