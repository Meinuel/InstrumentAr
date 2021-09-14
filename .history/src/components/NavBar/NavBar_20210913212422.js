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
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">InstrumentAr</Navbar.Brand>
            <Form className="d-flex">
                <NavDropdown title="All" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Guitars</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Drums</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Brass</NavDropdown.Item>
                </NavDropdown>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="inputSearch"
                        aria-label="Search"
                    />
                    <Button variant="warning"><img className="img-lupa" src="https://image.flaticon.com/icons/png/512/64/64673.png" alt="lupa" /></Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                    </svg>
            </Form>
        </Navbar>
    );
}

export default MyNavBar;