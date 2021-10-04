import styles from './ItemCount.module.css'

export default function ItemCount (props){
    const {quantity,onAdd,onRemove} = props;

    return (
        <div>
            <div className="d-flex justify-content-evenly bg-light">
                <button className={styles.counter} onClick={onRemove}>-</button>
                <div>{quantity}</div>
                <button className={styles.counter} onClick={onAdd}>+</button>
            </div>
        </div>

    )
}