import MyNavBar from './components/NavBar/NavBar.js';
import Cards from './components/Cards/Cards.js';
import './App.css';

function App() {
    return (
        <div className="text-center">
            <header>
                <MyNavBar/>
            </header>
            <body className="main-body bg-black d-flex align-items-center justify-content-center">
                <div>
                    <Cards/>
                </div>
            </body>
        </div>
    );
}

export default App;
