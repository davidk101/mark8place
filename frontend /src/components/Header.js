import React from 'react'
import {LinkContainer} from 'react-router-bootstrap' /* <LinkContainer> wont trigger a full page refresh as react is used for single page applications whereas href will*/
import {Navbar, Nav, Container} from "react-bootstrap";

function Header(){
    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect> {/*from react bootstrap docs*/}
                <Container>
                    <LinkContainer to = "/">
                        <Navbar.Brand>mark8place</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">{/* margin left*/}
                            <LinkContainer to = "/cart">
                                <Nav.Link><i className='fas fa-shopping-cart'/> Cart</Nav.Link>{/*font awesome SVG icon*/}
                            </LinkContainer>

                            <LinkContainer to = "/login">
                                <Nav.Link to = "/login"><i className='fas fa-user'/> Log In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header