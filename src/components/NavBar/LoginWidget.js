import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

export default function LoginWidget (){
    const {user,SignInWithFirebase} = useContext(UserContext) 
    return(
        <div>
            {user ? <Link to={'/userprofile'}><FontAwesomeIcon className="img-carro nav-btn-a" icon={faUser}/></Link> : <button onClick={SignInWithFirebase}>Login</button>}
        </div>
    )
}