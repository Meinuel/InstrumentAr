import MyNavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/Cards/ItemListContainer.js';
import './App.css';

function App() {
    return (
        <div className="text-center">
            <header>
                <MyNavBar/>
            </header>
            <body className="main-body d-flex align-items-center justify-content-center">
                <div>
                    <ItemListContainer/>
                </div>
            </body>
        </div>
    );
}

export default App;
