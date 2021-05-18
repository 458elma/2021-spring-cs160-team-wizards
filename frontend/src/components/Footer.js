import React from 'react'
import {Row, Col, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Row className = 'main-footer' >
                    <Col className='text-center py-4'>
                        Copyright &copy; TutorPlace {new Date().getFullYear()}
                    </Col>
                </Row>
                
        </footer>
    )
}

export default Footer

