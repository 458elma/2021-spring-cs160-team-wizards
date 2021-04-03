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
                    <Card.Img src={user.image} alt={user.name}></Card.Img>
                </Col>

                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{user.name}</h3>
                        <h6>{user.category}</h6>
                        <Rating value={user.rating} text={`${user.numReviews} reviews`}></Rating>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link className='btn btn-dark my-1'>View Reviews</Link>
                        {
                            user.isAdmin &&
                            <br></br>
                        }
                        {
                            user.isAdmin &&
                            <Link className='btn btn-dark my-1'>Chats</Link>
                        }
                        {
                            user.isAdmin &&
                            <br></br>
                        }
                        {
                            user.isAdmin &&
                            <Link className='btn btn-dark my-1'>Edit Basic Info</Link>
                        }
                        {
                            user.isAdmin &&
                            <br></br>
                        }
                        {
                            user.isAdmin &&
                            <Link className='btn btn-dark my-1'>Edit Transaction Info</Link>
                        }
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col>
                <ListGroup.Item>
                    <h2>Basic Info</h2>
                    <h6>Email: {user.email}</h6>
                    <h6>Gender: {user.gender}</h6>
                    {
                        user.isTutor &&
                        <h6>Rate: ${user.price}/hr</h6>
                    }
                    <br></br>
                    <h6>Availability</h6>
                    <p>{user.day}</p>
                    <p>{user.time}</p>
                    <br></br>
                    <h6>About</h6>
                    <p>{user.description}</p>
                </ListGroup.Item>
            </Col>
            </Row>
        </>
    )
}

export default UserScreen
