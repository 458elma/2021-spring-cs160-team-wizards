import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating.js'

const AdminUserScreen = ({ match }) => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/admins/${match.params.id}`)
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

                    <ListGroup.Item>
                        {
                        user.isTutor &&
                        <Link 
                        className='btn btn-dark my-1'
                        to={`/reviewView/admins/${match.params.id}`}>
                            View Reviews
                        </Link>
                        }
                        {
                        user.isTutor &&
                        <br></br>
                        }
                        <Link className='btn btn-dark my-1'>Chats</Link>
                        <br></br>
                        <Link className='btn btn-dark my-1'>Edit Transaction Info</Link>
                    </ListGroup.Item>
                    
                </ListGroup>
            </Col>

            <Col>
                <Link 
                className='btn btn-dark my-1' 
                to={`/infoEditor/admins/${match.params.id}`}>
                    Edit Basic Info
                </Link>
                <ListGroup.Item>
                    <h2>Basic Info</h2>
                    <h6>Email: {user.email}</h6>
                    <h6>Gender: {user.gender}</h6>
                    <br></br>
                    <h6>About</h6>
                    <p>{user.description}</p>
                </ListGroup.Item>
                <br></br>
                <Link className='btn btn-dark my-1'>Manage Sessions</Link>
                <ListGroup.Item>
                    <h2>Sessions</h2>
                </ListGroup.Item>
            </Col>
            </Row>
        </>
    )
}

export default AdminUserScreen
