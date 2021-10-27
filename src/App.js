import AppRouter from './AppRouter/AppRouter.js';
import { CartProvider } from './context/CartContext.js';
import { NavBarProvider } from './context/NavBarContext.js';
import './css/style.css'

function App() {
    return (
        <CartProvider>
            <NavBarProvider>
                <AppRouter/>
            </NavBarProvider>
        </CartProvider>
    );
}

export default App;
