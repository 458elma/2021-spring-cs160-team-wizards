import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating.js'

const UserScreen = ({ match }) => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/users/${match.params.id}`)
            setUser(res.data)
        }

        fetchUser()
    }, [match])

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>Back</Link>

            <Row>
            <Col>
                <Col md={6}>
                    <Card.Img src={user.profileImage} alt={user.name}></Card.Img>
                </Col>

                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{user.name}</h3>
                    </ListGroup.Item>
                    {
                    user.isTutor &&
                    <ListGroup.Item>
                        <Link 
                        className='btn btn-dark my-1'
                        to={`/reviewWriter/users/${match.params.id}`}>
                            Reviews
                        </Link>
                    </ListGroup.Item>
                    }
                    
                </ListGroup>
            </Col>

            <Col>
                <ListGroup.Item>
                    <h2>Basic Info</h2>
                    <h6>Email: {user.email}</h6>
                    <h6>Gender: {user.gender}</h6>
                    <br></br>
                    <h6>About</h6>
                    <p>{user.description}</p>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item>
                    <h3>Sessions</h3>
                </ListGroup.Item>
            </Col>
            </Row>
        </>
    )
}

export default UserScreen
