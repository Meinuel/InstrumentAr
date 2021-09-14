import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
const MyNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="nav-flex">
            <Navbar.Brand href="#home">InstrumentAr</Navbar.Brand>
            <Form className="d-flex">
                <NavDropdown title="All" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#Guitars">Guitars</NavDropdown.Item>
                    <NavDropdown.Item href="#Drums">Drums</NavDropdown.Item>
                    <NavDropdown.Item href="#Brass">Brass</NavDropdown.Item>
                </NavDropdown>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="inputSearch"
                        aria-label="Search"
                    />
                    <Button variant="warning"><img className="img-lupa" src="https://image.flaticon.com/icons/png/512/64/64673.png" alt="lupa" /></Button>
            </Form>
            <a href="https://www.mercadolibre.com/"><img className="img-carro" src="https://latgchallenge.com/assets/images/logos_slider/cart.png" alt="dazos"/></a>
        </Navbar>
    );
}

export default MyNavBar;