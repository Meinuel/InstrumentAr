import AppRouter from './AppRouter/AppRouter.js';
import { CartProvider } from './context/CartContext.js';
import { NavBarProvider } from './context/NavBarContext.js';
import { UserProvider } from './context/UserContext.js';
import './css/style.css'

function App() {
    return (
        <CartProvider>
            <NavBarProvider>
                <UserProvider>
                    <AppRouter/>
                </UserProvider>
            </NavBarProvider>
        </CartProvider>
    );
}

export default App;
