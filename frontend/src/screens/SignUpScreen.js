import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import SignInContainer from '../components/SignInContainer'


const SignUpScreen = ({ location}) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  //const [message, setMessage] = useState(null)

  const redirect = location.search ? location.search.split('=')[1] : '/'

//   useEffect(() => {
    // if (userInfo) {
    //   history.push(redirect)
    // }
//   }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    //if (password !== confirmPassword) {
     // setMessage('Passwords do not match')
    
  }

  return (
    <SignInContainer>
      <h1>Create your TutorPlace Account</h1>
      {/* {message && <Message variant='danger'>{message}</Message>} */}
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Row>
        <Col>
        <Form.Group controlId='firstname'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='firstname'
            placeholder='First Name'
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId='lastname'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='lastname'
            placeholder='Last Name'
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        </Col>
       </Form.Row>
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

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' size="lg" block>
          Sign Up
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Sign in instead
          </Link>
        </Col>
      </Row>
    </SignInContainer>
  )
}

export default SignUpScreen
