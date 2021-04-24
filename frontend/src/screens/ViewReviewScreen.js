import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating.js'

const ViewReviewScreen = ({ match }) => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/reviewView/admins/${match.params.id}`)
            setUser(res.data)
        }

        fetchUser()
    }, [match])

    const nums = ['1', '2', '3', '4', '5'];

    const theReviews = []

    for (const [i, num] of nums.entries()) {
        theReviews.push(
        <ListGroup.Item>
            <h2>{user.title}</h2>
            <Rating
                value={user.rating}
                text={` ${user.rating}/5`}
            ></Rating>
            <h6>Review by: {user.users}</h6>
            <h6>Posted on: {user.date}</h6>
            <br></br>
            <p>{user.comment}</p>
        </ListGroup.Item>
        )
    }

    return (
        <>
            <Link className='btn btn-dark my-3' to={`/admins/${match.params.id}`}>Back</Link>
            <Col>
                <ListGroup variant="flush">
                    {theReviews}
                </ListGroup>
            </Col>
        </>
    )
}

export default ViewReviewScreen
