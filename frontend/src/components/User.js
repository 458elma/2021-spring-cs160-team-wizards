import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const User = ({user}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/users/${user._id}`}>
                <Card.Img src={user.image} variant='top'></Card.Img>
            </Link>

            <Card.Body>
                <Link to={`/users/${user._id}`}>
                    <Card.Title as='div'><strong>{user.name}</strong></Card.Title>
                </Link>
            
                <Card.Text as='div'>
                    <Rating value={user.rating} text={user.numReviews > 0 ? ` ${user.numReviews} reviews` : ''}></Rating>
                </Card.Text>
                <Card.Text as="h3">
                    {user.category}
                </Card.Text>
                <Card.Text as="h6">
                    {user.price != null ? `From $${user.price}` : ''}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default User
