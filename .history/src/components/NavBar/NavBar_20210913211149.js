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
                    <Button variant="outline-success"><img className = "imgLupa" src="https://image.flaticon.com/icons/png/512/64/64673.png" alt="lupa" /></Button>
            </Form>
        </Navbar>
    );
}

export default MyNavBar;