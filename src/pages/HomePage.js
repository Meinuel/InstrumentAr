import MyNavBar from "../components/NavBar/NavBar";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
export default function HomePage(){
    const navOptions = [
        {title : 'Guitars' , query : 'GuitarrasElectricasGibson'},
        {title : 'Bass' , query : 'BajoFender'},
        {title : 'Drums' , query : 'BateriaMaped'},
        {title : 'Brass' , query : 'Saxo'}]
    return (
        <div>
            <MyNavBar/>
                <div className="home-container">
                    <ul className="nav-pages">
                    {
                            navOptions.map(({title,query}) => (
                                <li><Link to={`/product/${query}`}><Button variant="light" size="lg" className="btn">{title}</Button></Link></li>
                            ))
                        }
                    </ul>
                </div>
        </div>
    )
}