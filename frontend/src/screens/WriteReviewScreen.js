import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating.js'

const WriteReviewScreen = ({ match }) => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/reviewWriter/users/${match.params.id}`)
            setUser(res.data)
        }

        fetchUser()
    }, [match])

    const [revTitle, setRevTitle] = useState('')
    const [revRating, setRevRating] = useState('')
    const [revComment, setRevComment] = useState('')

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

    const submitHandler = (e) => {
        e.preventDefault()    
    }

    return (
        <>
            <Link className='btn btn-dark my-3' to={`/users/${match.params.id}`}>Back</Link>
            <Col>
                <h2>Leave a Review</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='revTitle'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='revTitle'
                            placeholder='Review title'
                            value={revTitle}
                            onChange={(e) => setRevTitle(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='revRating'>
                        <Form.Label>
                            Rating Out of 5 (select rating)
                        </Form.Label>
                        <Form.Control 
                        as='select'
                        value={revRating}
                        onChange={(e) => setRevRating(e.target.value)}
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='revComment'>
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                            type='revComment'
                            as="textarea"
                            rows={5}
                            placeholder='Write a review...'
                            value={revComment}
                            onChange={(e) => setRevComment(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' size="lg" block>
                        Submit Review
                    </Button>
                </Form>
                <ListGroup variant="flush">
                    {theReviews}
                </ListGroup>
            </Col>
        </>
    )
}

export default WriteReviewScreen
