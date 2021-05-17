import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Session = ({ session }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/sessions/${session._id}`}>
        <Card.Img src={session.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/sessions/${session._id}`}>
          <Card.Title as='div'>
            <strong>{session.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={session.rating}
            text={`${session.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>{session.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Session
