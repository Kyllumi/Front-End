import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNav() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='border-bottom'>
            <Container>
                <Navbar.Brand href="#title">Epibooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#browse">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;