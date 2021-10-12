import '../../css/style.css'

export default function ItemCount (props){
    const {quantity,onAdd,onRemove} = props;

    return (
        <div>
            <div className="d-flex justify-content-evenly bg-light">
                <button className="counter" onClick={onRemove}>-</button>
                <div>{quantity}</div>
                <button className="counter" onClick={onAdd}>+</button>
            </div>
        </div>

    )
}