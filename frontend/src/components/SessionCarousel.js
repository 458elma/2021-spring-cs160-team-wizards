import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopSessions } from '../actions/sessionActions'

const SessionCarousel = () => {
  const dispatch = useDispatch()

  const sessionTopRated = useSelector((state) => state.sessionTopRated)
  const { loading, error, sessions } = sessionTopRated

  useEffect(() => {
    dispatch(listTopSessions())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {sessions.map((session) => (
        <Carousel.Item key={session._id}>
          <Link to={`/sessions/${session._id}`}>
            <Image src={session.image} alt={session.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {session.name} (${session.description})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default SessionCarousel
