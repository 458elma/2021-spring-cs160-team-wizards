import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button, Row, Col } from 'react-bootstrap'
import SignInContainer from '../components/SignInContainer'


const EditInfoScreen = ({location, match}) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')
  const [about, setAbout] = useState('')

  const [user, setUser] = useState([])
  useEffect(() => {
      const fetchUser = async() => {
          const res = await axios.get(`/infoEditor/admins/${match.params.id}`)
          setUser(res.data)
      }

      fetchUser()
  }, [match])

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) => {
    e.preventDefault()    
  }

  return (
    <SignInContainer>
      <h2>Edit your basic info</h2>
      <Form onSubmit={submitHandler}>
        <Form.Row>
        <Col>
        <Form.Group controlId='firstname'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='firstname'
            placeholder={user.name}
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
            placeholder={user.name}
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
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter new password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm new password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='gender'>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type='gender'
            placeholder='Enter gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='about'>
          <Form.Label>About you</Form.Label>
          <Form.Control
            type='about'
            as="textarea"
            rows={5}
            placeholder='Tell us about yourself...'
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' size="lg" block>
          Save
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          <Link to={`/admins/${match.params.id}`}>
            Cancel
          </Link>
        </Col>
      </Row>
    </SignInContainer>
  )
}

export default EditInfoScreen