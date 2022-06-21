import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavBarContext } from '../../context/NavBarContext'

export default function Brand(props){

    const {brandTitle,img,categorie} = props
    const {activateCategorie,getBrandLogo} = useContext(NavBarContext)

    return(
        <Link onClick={() => {
            activateCategorie(categorie)
            getBrandLogo(brandTitle,categorie)
        }} to={`/product/${brandTitle}`}><img className="img-resize" src={img} alt="brand"/></Link>
    )
}