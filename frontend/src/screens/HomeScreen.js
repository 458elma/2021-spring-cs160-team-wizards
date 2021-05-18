import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Session from '../components/Session'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import SessionCarousel from '../components/SessionCarousel'
import Meta from '../components/Meta'
import { listSessions } from '../actions/sessionActions'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const sessionList = useSelector((state) => state.sessionList)
    const { loading, error, sessions, page, pages } = sessionList

    useEffect(() => {
        dispatch(listSessions(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta />
            {!keyword ? (
                <SessionCarousel />
            ) : (
                <Link to='/' className='btn btn-light'>
                    Go Back
                </Link>
            )}
            <h1>Latest Sessions</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {sessions.map((session) => (
                            <Col key={session._id} sm={12} md={6} lg={4} xl={3}>
                                <Session session={session} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate
                        pages={pages}
                        page={page}
                        keyword={keyword ? keyword : ''}
                    />
                </>
            )}
        </>
    )
}

export default HomeScreen
