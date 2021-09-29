import ItemList from "./ItemList";
export default function ItemListContainer (props){
    const {query} = props
    return (
        <body className="main-body d-flex justify-content-center">
            <div className="container">
                <ItemList query={query}/>
            </div>
    </body>

    );
}