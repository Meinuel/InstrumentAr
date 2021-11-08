import OrderItem from './OrderItem'
export default function OrderList(props){
    const {orderList, totalPrice} = props
    console.log(orderList)
    return(
        <div className="order-list">
            <div>Compraste : </div>
            {
            orderList.map(item => <OrderItem item={item}/>)
            }
            <div>{`Total : ${totalPrice}$`}</div>
        </div>
    )
}