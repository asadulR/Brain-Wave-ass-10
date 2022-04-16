import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Auth/firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);


    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" className='shadow py-3' variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Brain Wave</Navbar.Brand>
                    <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/">HOME</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">BLOG</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button onClick={handleSignout} className='signout-btn bg-white border-0'>Sign out</button>
                                    : <Nav.Link as={CustomLink} to="/login">
                                        LOGIN
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;