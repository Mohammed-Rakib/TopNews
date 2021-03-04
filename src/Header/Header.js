import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
const Header = () => {
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Top News in the World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Top News</Nav.Link>
                        <Nav.Link href="#pricing">Sports</Nav.Link>
                        <NavDropdown title="Language" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bangla</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Entertainment</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;