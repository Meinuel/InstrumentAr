import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
const MyNavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">InstrumentAr</Navbar.Brand>
            </Container>
            <Form className="d-flex">
                <NavDropdown title="All" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Guitars</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Drums</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">Brass</NavDropdown.Item>
                </NavDropdown>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
            </Form>
            <Container>
                <Navbar.Brand href="#home">InstrumentAr</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;