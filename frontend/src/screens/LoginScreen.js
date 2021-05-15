import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, Info_user } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'



  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    history.push(redirect)
  }


  useEffect(() => {
    if (Info_user) {
      history.push(redirect)
    }
  }, [history, Info_user, redirect])

  return (
    <FormContainer>
      <h1>Log In</h1>

      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Log In
        </Button>

        <Row className='py-3'>
          <Col>
            Don't Have an Account?{' '}
            <Link to={'/signup'}>
              Sign up instead
          </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen