import OrderList from "./OrderList"
export default function OrdersListContainer(props){
    const {orders} = props
    console.log(orders)

    return(
        <div className="orders-list-container">
            <h2>Tus compras</h2>
            {orders.map(order => <OrderList orderList={order.item} totalPrice={order.total}/>)}
        </div>
    )
}