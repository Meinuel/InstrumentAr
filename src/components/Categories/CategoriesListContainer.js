import Categories from './Categories'
import '../../css/style.css'
import { useContext } from 'react'
import { NavBarContext } from '../../context/NavBarContext'

export default function CategoriesListContainer(){
    const {categories} = useContext(NavBarContext)
    return(
        <div className="d-flex justify-content-evenly">
            {categories.map( categorie => (
                <Categories categorie={categorie}/>
            ))}
        </div>
    )
} 