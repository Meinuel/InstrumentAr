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
                    <Button variant="warning"><img className="img-lupa" src={"../../../assets/lupa.png"} alt="lupa" /></Button>
                    <img src="{./basket.svg}" alt="dazos"/>
            </Form>
        </Navbar>
    );
}

export default MyNavBar;