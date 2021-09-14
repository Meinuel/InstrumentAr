import imageSwamp from '../../assets/swamp.jpg';
import './Card.css';
const Card = () => {
    return (
    <div className="card bg-info animate__animated animate__fadeInUp">
        <div className="overflow-hidden">
            <img className="card-img-top" src={imageSwamp} alt="" />
        </div>
        <div className="card-body">
            <h4>Card Title</h4>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus modi iure minima magnam numquam error velit magni quas voluptate vel est adipisci architecto exercitationem amet inventore commodi, cum nostrum unde?</p> 
        </div> 
    </div>
    )
    }
export default Card;