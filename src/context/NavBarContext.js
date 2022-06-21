import {createContext, useState} from 'react'
import GuitarImg from '../assets/guitarimg.png'
import DrumImg from '../assets/drumimg.png'
import BassImg from '../assets/bassesimg.png'
import SaxImg from '../assets/saximg.png'
import GibsonImg from '../assets/gibsonimg.png'
import FenderImg from '../assets/fenderimg.png'
import JacksonImg from '../assets/jacksonimg.png'
import EpihponeImg from '../assets/epiphoneimg.webp'
import MusicManImg from '../assets/musicmanimg.png'
import WarwickImg from '../assets/warwickimg.png'
import SamickImg from '../assets/samickimg.png'
import MapexImg from '../assets/mapeximg.png'
import TamaImg from '../assets/tamaimg.png'
import GretschImg from '../assets/gretschimg.png'
import SonorImg from '../assets/sonorimg.png'
import CodaImg from '../assets/codaimg.jpg'
import KeilwerthImg from '../assets/keilwerthimg.png'
import YanagisawaImg from '../assets/yanagisawaimg.png'
import YamahaImg from '../assets/yamahaimg.png'

const NavBarContext = createContext()

const NavBarProvider = ({children}) => {
    const [isActive, setNav] = useState(false)
    const [activeCategorie, setCategorie] = useState()
    const [activeBrands, setBrands] = useState()
    const [brandLogo, setBrandLogo] = useState()

    const categories = [
        {categorieTitle:'Guitars',style:'container-guitars',img:GuitarImg,navStyle:'nav-container-guitars',brands:[{id:1,brandTitle:'gibson',img:GibsonImg},{id:2,brandTitle:'fender',img:FenderImg},{id:3,brandTitle:'jackson',img:JacksonImg},{id:4,brandTitle:'epiphone',img:EpihponeImg}]},
        {categorieTitle:'Drums',style:'container-drums',img:DrumImg,navStyle:'nav-container-drums',brands:[{id:1,brandTitle:'mapex',img:MapexImg},{id:2,brandTitle:'tama',img:TamaImg},{id:3,brandTitle:'gretsch',img:GretschImg},{id:4,brandTitle:'sonor',img:SonorImg}]},
        {categorieTitle:'Basses',style:'container-basses',img:BassImg,navStyle:'nav-container-basses',brands:[{id:1,brandTitle:'musicman',img:MusicManImg},{id:2,brandTitle:'fender',img:FenderImg},{id:3,brandTitle:'warwick',img:WarwickImg},{id:4,brandTitle:'samick',img:SamickImg}]},
        {categorieTitle:'Saxes',style:'container-brasses',img:SaxImg,navStyle:'nav-container-saxes',brands:[{id:1,brandTitle:'coda',img:CodaImg},{id:2,brandTitle:'keilwerth',img:KeilwerthImg},{id:3,brandTitle:'yanagisawa',img:YanagisawaImg},{id:4,brandTitle:'yamaha',img:YamahaImg}]}
    ]

    const activateCategorie = (categorie) => {
        setCategorie(categorie)
        setNav(true)
        getBrand(categorie.categorieTitle)
    }

    const getBrandLogo = (brandTitle,categorie) => {
        categorie.brands.forEach(brand => {
            if(brand.brandTitle === brandTitle){
                brand['isActive'] = true
                setBrandLogo(brand.img)
            }else{
                brand['isActive'] = false
            }
        });
    }

    const getBrand = (categorieTitle) => {

        categories.forEach(categorie =>{
            if( categorie.categorieTitle === categorieTitle ){
                setBrands(categorie.brands)
                return
            }
        })
    }
    
    const data = {
        categories,
        activeCategorie,
        isActive,
        activeBrands,
        brandLogo,
        activateCategorie,
        getBrandLogo,
        setNav
    }
    return(
        <NavBarContext.Provider value={data}>
            {children}
        </NavBarContext.Provider>
    )
}
export { NavBarProvider, NavBarContext};