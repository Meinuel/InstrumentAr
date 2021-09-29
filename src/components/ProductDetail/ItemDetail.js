import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
export default function ItemDetail(props){
    const {productData} = props
    return(
        <div className="d-flex flex-column align-items-center">
            <img src={productData['thumbnail']} alt="product img" className="item-img"/>
            <div>{productData['title']}</div>
            <div>Stock : {productData['available_quantity']}</div>
            <div>Precio : {productData['price']}$</div>
            <ItemCount stock={productData['available_quantity']} initValue={1}/>
        </div>
    )
}