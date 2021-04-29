import React from 'react'
import {Row, Col, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <Row className = 'main-footer' >
                <Container>
                    <Col className='text-center py-3'>
                        <LinkContainer to="/login">
                            <Nav.Link> Contact Us </Nav.Link>
                        </LinkContainer>
                        Copyright &copy; TutorPlace {new Date().getFullYear()}
                    </Col>
                </Container>
                    
                </Row>
                
        </footer>
    )
}

export default Footer
