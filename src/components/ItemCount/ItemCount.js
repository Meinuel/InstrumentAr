import '../../css/style.css'

export default function ItemCount (props){
    const {quantity,onAdd,onRemove} = props;

    return (
        <div>
            <div className="d-flex justify-content-between item-count-container">
                <button className="d-flex justify-content-center align-items-center counter" onClick={onRemove}>-</button>
                <div>{quantity}</div>
                <button className="d-flex justify-content-center align-items-center counter" onClick={onAdd}>+</button>
            </div>
        </div>

    )
}