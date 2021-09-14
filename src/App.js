import MyNavBar from './components/NavBar/NavBar.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <MyNavBar/>
            </header>
            <body>
                <Cards/>
            </body>
        </div>
    );
}

export default App;
