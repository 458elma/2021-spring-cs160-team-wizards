import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listSessions,
  deleteSession,
  createSession,
} from '../actions/sessionActions'
import { SESSION_CREATE_RESET } from '../constants/sessionConstants'

const SessionListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const sessionList = useSelector((state) => state.sessionList)
  const { loading, error, sessions, page, pages } = sessionList

  const sessionDelete = useSelector((state) => state.sessionDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = sessionDelete

  const sessionCreate = useSelector((state) => state.sessionCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    session: createdSession,
  } = sessionCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: SESSION_CREATE_RESET })

    if (!userInfo) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/sessions/${createdSession._id}/edit`)
    } else {
      dispatch(listSessions('', pageNumber))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdSession,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteSession(id))
    }
  }

  const createSessionHandler = () => {
    dispatch(createSession())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Sessions</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createSessionHandler}>
            <i className='fas fa-plus'></i> Create Session
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session._id}>
                  <td>{session._id}</td>
                  <td>{session.name}</td>
                  <td>${session.price}</td>
                  <td>{session.category}</td>
                  <td>
                    <LinkContainer to={`/sessions/${session._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(session._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isTutor={true} />
        </>
      )}
    </>
  )
}

export default SessionListScreen
