import AppRouter from './AppRouter/AppRouter.js';
import { CartProvider } from './context/CartContext.js';
import './css/style.css'

function App() {
    return (
        <CartProvider>
            <AppRouter/>
        </CartProvider>
    );
}

export default App;
