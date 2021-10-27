import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/style.css'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import { NavBarContext } from '../../context/NavBarContext'
import NavBrands from './NavBrands'
import NavCategories from './NavCategories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function MyNavBar (props) {

    const {isActive,setNav,activeCategorie} = useContext(NavBarContext) 
    const {isHome} = props
    return (          
        <header>
                <nav className={isActive ? activeCategorie.navStyle : 'nav-container'}>
                    {isActive ? <button onClick={() => setNav(false)} className="nav-btn-a"><FontAwesomeIcon icon={faArrowLeft}/></button> : <Link to='/' className="nav-btn-a"><h4>InstrumentAr</h4></Link>}
                    <div className="nav-pages-container"> 
                        {isActive ? <NavBrands isHome={isHome}/> : <NavCategories/>}
                        <CartWidget/>
                    </div>
                </nav> 
        </header>  
    );
}
