import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
export default function OrderResponse(props){
    const {orderRsp} = props

    return(
        <div>
            {orderRsp.id ? 
                <div className="d-flex flex-column align-items-center">
                    <div>Compra exitosa!</div>
                    <div>{`Transacción : ${orderRsp.id}`}</div>
                    <FontAwesomeIcon icon={faCheckCircle} color="green"/>
                </div>
                :
                <div>
                    ERROR
                </div>
            }
        </div>
    )
}