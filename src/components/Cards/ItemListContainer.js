import Card from './Card';
import imageSwamp from '../../assets/swamp.jpg';
const text = 'Bienvenido a mi web!';
const cardObject = [
    {title : 'Tarjeta 1' , greeting: text, image : imageSwamp},
    {title : 'Tarjeta 2' , greeting : text, image : imageSwamp},
    {title : 'Tarjeta 3' , greeting : text, image : imageSwamp}]
const ItemListContainer = () => {
    return (
        <div className="container">
            <div className="row">
            {
                cardObject.map(
                    ({ title, greeting, image }) => (<div className="col-md-4"><Card title={title} greeting={greeting} image={image} /></div>)
                )
            }
            </div>
        </div>
    );
}
export default ItemListContainer;