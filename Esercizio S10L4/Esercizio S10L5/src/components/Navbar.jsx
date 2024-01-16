import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" as={Link} to='/' className='fs-3 fw-bold text-primary'>Indeed</Navbar.Brand>
                <Nav.Link href="#link" as={Link} to='/favourites'>Favourites</Nav.Link>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;