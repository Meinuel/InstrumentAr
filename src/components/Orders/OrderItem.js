export default function OrderItem(props){
    const {item} = props
    return(
        <div className="order-item">
            {`- ${item.name} x${item.quantity} - precio : ${item.price}$ x unidad`}
        </div>
    )
}