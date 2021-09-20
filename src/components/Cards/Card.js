import './Card.css';
const Card = (props) => {
    const {title,greeting,image} = props;
    return (
    <div className="card bg-info animate__animated animate__fadeInUp">
        <div className="overflow-hidden">
            <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="card-body">
            <h4>{title}</h4>
            <p>{greeting}
            </p> 
        </div> 
    </div>
    )
    }
export default Card;