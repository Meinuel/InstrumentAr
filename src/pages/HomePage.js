import CategoriesListContainer from '../components/Brand/CategoriesListContainer'
import MyNavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/Cards/ItemListContainer'
import '../css/style.css'
import Swiper from '../components/Swiper'

export default function HomePage(){

    return(
            <div className="home">
                <MyNavBar/>
                <CategoriesListContainer/>
                <ItemListContainer query={'ukelele'}/>
                {/* <Swiper/> */}
            </div>
    )
}