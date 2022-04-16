import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" className='shadow py-3' variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Brain Wave</Navbar.Brand>
                    <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#memes">
                                LOGIN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;