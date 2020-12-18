import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";

function Header(){
    return(
        <header>
            <Navbar bg="dark" variant={"dark"} expand="lg" collapseOnSelect> {/*from react bootstrap docs*/}
                <Container>
                    <Navbar.Brand href="#home">mark8place</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">{/* margin left*/}
                            <Nav.Link href="/cart"><i className={'fas fa-shopping-cart'}/> Cart</Nav.Link>{/*font awesome SVG icon*/}
                            <Nav.Link href="/login"><i className={'fas fa-user'}/> Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header