import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function UserProfile(){
    const {user} = useContext(UserContext)
    console.log(user)
    return(
        <div>
            <img src={user.photoURL} alt="user-img"/>
            <div>{user.displayName}</div>
            <div>{user.email}</div>
        </div>
    )
}