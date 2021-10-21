import GuitarImg from '../../assets/guitarimg.png'
import DrumImg from '../../assets/drumimg.png'
import BassImg from '../../assets/bassesimg.png'
import SaxImg from '../../assets/saximg.png'
import GibsonImg from '../../assets/gibsonimg.png'
import FenderImg from '../../assets/fenderimg.png'
import JacksonImg from '../../assets/jacksonimg.png'
import EpihponeImg from '../../assets/epiphoneimg.webp'
import MusicManImg from '../../assets/musicmanimg.png'
import WarwickImg from '../../assets/warwickimg.png'
import SamickImg from '../../assets/samickimg.png'
import MapexImg from '../../assets/mapeximg.png'
import TamaImg from '../../assets/tamaimg.png'
import GretschImg from '../../assets/gretschimg.png'
import SonorImg from '../../assets/sonorimg.png'
import CodaImg from '../../assets/codaimg.jpg'
import KeilwerthImg from '../../assets/keilwerthimg.png'
import YanagisawaImg from '../../assets/yanagisawaimg.png'
import YamahaImg from '../../assets/yamahaimg.png'
import Categories from './Categories'
import '../../css/style.css'

export default function CategoriesListContainer(){

    const categories = [
        {categorieTitle:'Guitars',style:'container-guitars',img:GuitarImg,brands:[{id:1,brandTitle:'products',img:GibsonImg},{id:2,brandTitle:'fender',img:FenderImg},{id:3,brandTitle:'Jackson',img:JacksonImg},{id:4,brandTitle:'Epiphone',img:EpihponeImg}]},
        {categorieTitle:'Drums',style:'container-drums',img:DrumImg,brands:[{id:1,brandTitle:'Mapex',img:MapexImg},{id:2,brandTitle:'Tama',img:TamaImg},{id:3,brandTitle:'Gretsch',img:GretschImg},{id:4,brandTitle:'Sonor',img:SonorImg}]},
        {categorieTitle:'Basses',style:'container-basses',img:BassImg,brands:[{id:1,brandTitle:'MusicMan',img:MusicManImg},{id:2,brandTitle:'Fender',img:FenderImg},{id:3,brandTitle:'Warwick',img:WarwickImg},{id:4,brandTitle:'Samick',img:SamickImg}]},
        {categorieTitle:'Saxes',style:'container-brasses',img:SaxImg,brands:[{id:1,brandTitle:'Coda',img:CodaImg},{id:2,brandTitle:'Keilwerth',img:KeilwerthImg},{id:3,brandTitle:'Yanagisawa',img:YanagisawaImg},{id:4,brandTitle:'Yamaha',img:YamahaImg}]}]

    return(
        <div className="d-flex">
            {categories.map(({categorieTitle,style,img,brands}) => (
                <Categories categorieTitle={categorieTitle} style={style} img={img} brands={brands}/>
            ))}
        </div>
    )
} 