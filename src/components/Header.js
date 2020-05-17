import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Nav>
            <Nav.Link href="/">
                <img
                    alt=""
                    src="https://react-bootstrap.netlify.app/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}{props.company_name}
            </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="./products">Our Products</Nav.Link>
                    <Nav.Link href="./aboutus">About Us</Nav.Link>
                    <Nav.Link eventKey={2} href="./contact">
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;