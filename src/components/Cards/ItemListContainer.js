import Card from './Card';
import gibsonSG from '../../assets/sg.jpg';
import stratocaster from '../../assets/strato.jpg';
import lesPaul from '../../assets/lespaul.jpg'

const cardObject = [
    {title : 'Gibson SG' , price: '3000$', image : gibsonSG},
    {title : 'Stratocaster' , price : '2000$', image : stratocaster},
    {title : 'Tarjeta 3' , price : '3500$', image : lesPaul}]
const ItemListContainer = () => {
    return (
        <div className="container">
            <div className="row">
            {
                cardObject.map(
                    ({ title, price, image }) => (<div className="col-md-4"><Card title={title} price={price} image={image} /></div>)
                )
            }
            </div>
        </div>
    );
}
export default ItemListContainer;