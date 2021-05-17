import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listSessionDetails,
  createSessionReview,
} from '../actions/sessionActions'
import { SESSION_CREATE_REVIEW_RESET } from '../constants/sessionConstants'

const SessionScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const sessionDetails = useSelector((state) => state.sessionDetails)
  const { loading, error, session } = sessionDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const sessionReviewCreate = useSelector((state) => state.sessionReviewCreate)
  const {
    success: successSessionReview,
    loading: loadingSessionReview,
    error: errorSessionReview,
  } = sessionReviewCreate

  useEffect(() => {
    if (successSessionReview) {
      setRating(0)
      setComment('')
    }
    if (!session._id || session._id !== match.params.id) {
      dispatch(listSessionDetails(match.params.id))
      dispatch({ type: SESSION_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successSessionReview])

  const joinClassHandler = () => {
    history.push(`/sessions/${match.params.id}?studentNum=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createSessionReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={session.name} />
          <Row>
            <Col md={6}>
              <Image src={session.image} alt={session.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{session.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={session.rating}
                    text={`${session.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${session.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {session.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${session.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {session.studentNum > 0 ? 'Open Seats' : 'No Seats Available'}
                      </Col>
                    </Row>
                  </ListGroup.Item>



                  <ListGroup.Item>
                    <Button
                      onClick={joinClassHandler}
                      className='btn-block'
                      type='button'
                      disabled={session.studentNum === 0}
                    >
                      Join Session
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {session.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {session.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successSessionReview && (
                    <Message variant='success'>
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingSessionReview && <Loader />}
                  {errorSessionReview && (
                    <Message variant='danger'>{errorSessionReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingSessionReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default SessionScreen
