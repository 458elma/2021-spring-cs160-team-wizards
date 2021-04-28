import React from 'react'
import {Route} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import SearchBox from './SearchBox'
import CheckBox from './CheckBox'
const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand>TutorPlace</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
               

                      {/* <Route render= {({history})=> <SearchBox history ={history}/>}/>   */}
                        <Nav className="ml-auto">

                            <LinkContainer to="/signup">
                                <Nav.Link><i class="fas fa-user-plus"></i> Sign Up</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                            <Nav.Link><i className='fas fa-user'></i> Log In</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>   
            </Navbar>
        </header>
    )
}

export default Header
