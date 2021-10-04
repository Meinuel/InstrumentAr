import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

export default function MyNavBar () {
    return (          
        <header>
            <nav className={styles.navContainer}>
                <Link to='/'><h5 className={styles.brand}>InstrumentAr</h5></Link>
                <div className={styles.navPagesContainer}>
                    <ul className={styles.navPages}>
                        <li><Link to={`/product/GuitarrasElectricasGibson`}><p>Guitars</p></Link></li>
                        <li><Link to={`/product/BajoFender`}><p>Bass</p></Link></li>
                        <li><Link to={`/product/BateriaMaped`}><p>Drums</p></Link></li>
                        <li><Link to={`/product/Saxo`}><p>Sax</p></Link></li>
                    </ul>
                </div>
                <CartWidget href = {"https://www.mercadolibre.com/"} className = {styles.imgCarro} src = {"https://latgchallenge.com/assets/images/logos_slider/cart.png"}/>
            </nav> 
        </header>  
    );
}
