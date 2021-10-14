import ItemList from "./ItemList";
import '../../css/style.css'

export default function ItemListContainer (props){
    const {query} = props
    return (
        <div className="d-flex flex-column justify-content-center item-list-container">
            <h1>{query}</h1>
            <div className="container">
                <ItemList query={query}/>
            </div>
    </div>

    );
}