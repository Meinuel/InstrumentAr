import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase.js'
import OrdersListContainer from "../components/Orders/OrdersListContainer";
import Spinner from 'react-bootstrap/Spinner'
import MyNavBar from "../components/NavBar/NavBar";
import UserInfo from "../components/UserInfo/UserInfo";

export default function UserProfile(){

    const {user} = useContext(UserContext)
    const [orders,setOrders] = useState('')

    async function getOrders (){
        const ordersCol = collection(db, "ordenes");
        const ordersSnapshot = await getDocs(ordersCol)
        const allOrders = ordersSnapshot.docs.map(doc => doc.data())
        const orders = allOrders.filter(order => {
            console.log(user.email)
            console.log(order.buyer.mail)
            return order.buyer.mail === user.email && order})
        setOrders(orders)      
    }   
    useEffect(()=>{
        getOrders()
    },[])

    return(
        <div>
            <MyNavBar/>
            <UserInfo user={user}/>
            {!orders ? 
                <Spinner className = "m-auto" animation = "grow"/> : 
                <OrdersListContainer orders={orders}/>
            }
        </div>
    )
}