import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from './CartWidget'

export default function MyNavBar () {
    return (          
        <header>
            <nav className="title">
                <h1>Icon</h1>
                <h1>InstrumentAr</h1>
                <CartWidget href = {"https://www.mercadolibre.com/"} className = {"img-carro"} src = {"https://latgchallenge.com/assets/images/logos_slider/cart.png"}/>
        </nav> 
        </header>  
    );
}
