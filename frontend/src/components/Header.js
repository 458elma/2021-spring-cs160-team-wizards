import React from 'react'
import {Route} from 'react-router-dom' 
import {useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { logout } from '../actions/userActions'
const Header = () => {
const dispatch = useDispatch()
const userLogin=useSelector(state=>state.userLogin)
    const { Info_user } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand>TutorPlace</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                    
                        <Nav className="ml-auto">

                            <LinkContainer to="/signup">
                                <Nav.Link><i class="fas fa-user-plus"></i> Sign Up</Nav.Link>
                            </LinkContainer>
                            {/* if the user login is successful then show the dropdown meny inclusing profile and logout */}
                            {Info_user ? (
                <NavDropdown title={Info_user.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                //else ask the user to input correct information
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>   
            </Navbar>
        </header>
    )
}

export default Header
