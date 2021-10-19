import Carousel from 'react-bootstrap/Carousel'
import '../../css/style.css'

export default function CarouselContainer(){
    return(
        <Carousel>
            <Carousel.Item interval={4000} className="carousel-container">
                <Carousel.Caption>
                <h3>Banner I</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} className="carousel-container">
                <Carousel.Caption>
                <h3>Banner II</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} className="carousel-container">
                <Carousel.Caption>
                <h3>Banner III</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}