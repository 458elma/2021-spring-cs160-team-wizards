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
                <Col md={6}>
                    <Card.Img src={user.image} alt={user.name}></Card.Img>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{user.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h6>{user.gender}</h6>
                            <h6>{user.description}</h6>
                        </ListGroup.Item>

                        <Rating value={user.rating} text={`${user.numReviews} reviews`}></Rating>


                    </ListGroup>
                </Col>


            </Row>
        </>
    )
}

export default UserScreen
