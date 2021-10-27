import { useContext } from "react"
import { Link } from "react-router-dom"
import { NavBarContext } from "../../context/NavBarContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function NavBrands(props){
    const style = 'active-brand-container'
    const {activeBrands,getBrandLogo,activeCategorie,setNav} = useContext(NavBarContext)
    const {isHome} = props
    return(
        <ul className="nav-pages">
            {!isHome && <Link onClick={() => setNav(false)} to={'/'}><FontAwesomeIcon color='white' icon={faHome}/></Link>}
            {activeBrands.map(brand => <li><Link className={brand['isActive'] && 'active-brand-container'} to={`/product/${brand.brandTitle}`}><button onClick={() => getBrandLogo(brand.brandTitle,activeCategorie)} className="nav-btn-a animate__animated animate__bounceInRight">{brand.brandTitle.charAt(0).toUpperCase() + brand.brandTitle.slice(1)}</button></Link></li>)}
        </ul>
    )
}