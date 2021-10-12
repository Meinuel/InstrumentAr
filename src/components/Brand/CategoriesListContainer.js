import GuitarImg from '../../assets/guitarimg.png'
import DrumImg from '../../assets/drumimg.png'
import BassImg from '../../assets/bassimg.png'
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

export default function CategoriesListContainer(){
    const categories = [
        {title:'Guitars',style:'container-guitars',img:GuitarImg,brands:[{id:1,title:'Gibson',img:GibsonImg, query:'GuitarrasElectricasGibson'},{id:2,title:'Fender',img:FenderImg,query:'GuitarrasElectricasFender'},{id:3,title:'Jackson',img:JacksonImg,query:'GuitarrasElectricasIbanez'},{id:4,title:'Epiphone',img:EpihponeImg,query:'Epiphone'}]},
        {title:'Drums',style:'container-drums',img:DrumImg,brands:[{id:1,title:'Mapex',img:MapexImg, query:'BateriaMapex'},{id:2,title:'Tama',img:TamaImg, query:'BateriaTama'},{id:3,title:'Gretsch',img:GretschImg, query:'BateriaGretsch'},{id:4,title:'Sonor',img:SonorImg, query:'BateriaSonor'}]},
        {title:'Basses',style:'container-basses',img:BassImg,brands:[{id:1,title:'MusicMan',img:MusicManImg, query:'BajoMusicMan'},{id:2,title:'Fender',img:FenderImg, query:'BajoFender'},{id:3,title:'Warwick',img:WarwickImg, query:'BajoWarwick'},{id:4,title:'Samick',img:SamickImg, query:'BajoSamick'}]},
        {title:'Brasses',style:'container-brasses',img:SaxImg,brands:[{id:1,title:'Coda',img:CodaImg, query:'SaxoCoda'},{id:2,title:'Keilwerth',img:KeilwerthImg, query:'SaxoKeilwerth'},{id:3,title:'Yanagisawa',img:YanagisawaImg, query:'SaxoYanagisawa'},{id:4,title:'Yamaha',img:YamahaImg, query:'SaxoYamaha'}]}]

    return(
        <div className="d-flex">
            {categories.map(({title,style,img,brands}) => (
                <Categories title={title} style={style} img={img} brands={brands}/>
            ))}
        </div>
    )
} 