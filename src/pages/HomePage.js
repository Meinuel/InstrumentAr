import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import styles from './HomePage.module.css'

export default function HomePage(){
    const navOptions = [
        {title : 'Guitars' , query : 'GuitarrasElectricasGibson'},
        {title : 'Bass' , query : 'BajoFender'},
        {title : 'Drums' , query : 'BateriaMaped'},
        {title : 'Brass' , query : 'Saxo'}]
    return (
        <div className={styles.homeContainer}>
            <ul className={styles.homePages}>
            {
                    navOptions.map(({title,query}) => (
                        <li><Link to={`/product/${query}`}><Button variant="light" size="lg" className={styles.btn}>{title}</Button></Link></li>
                    ))
                }
            </ul>
        </div>
    )
}