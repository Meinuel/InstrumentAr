import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/style.css'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

export default function MyNavBar () {
    const [isScroll,setNavStyle] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    },[])

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setNavStyle(true);
        } else {
            setNavStyle(false);
        }
    }
    return (          
        <header>
            <nav className={isScroll ? 'nav-scrolled' : 'nav-container'}>
                <Link to='/'><h4>InstrumentAr</h4></Link>
                <div className="nav-pages-container">
                    <ul className="nav-pages">
                        <li><Link to={`/product/GuitarrasElectricasGibson`}>Guitars</Link></li>
                        <li><Link to={`/product/BateriaMaped`}>Drums</Link></li>
                        <li><Link to={`/product/BajoFender`}>Bass</Link></li>
                        <li><Link to={`/product/Saxo`}>Sax</Link></li>
                    </ul>
                    <CartWidget/>
                </div>
            </nav> 
        </header>  
    );
}
