import CategoriesListContainer from '../components/Categories/CategoriesListContainer'
import MyNavBar from '../components/NavBar/NavBar'
import '../css/style.css'
import CarouselContainer from '../components/Carousel/CarouselContainer'

export default function HomePage(){

    return(
            <div>
                <MyNavBar isHome={true}/>
                <CategoriesListContainer/>
                <CarouselContainer/>
            </div>
    )
}