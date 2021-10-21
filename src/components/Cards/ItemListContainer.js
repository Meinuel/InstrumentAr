import ItemList from "./ItemList";
import '../../css/style.css'

export default function ItemListContainer (props){
    const {brandTitle} = props
    return (
        <div className="d-flex flex-column justify-content-center item-list-container">
            <h1>{brandTitle}</h1>
            <div className="container">
                <ItemList brandTitle={brandTitle}/>
            </div>
    </div>

    );
}