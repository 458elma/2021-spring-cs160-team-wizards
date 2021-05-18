import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Table, Image, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import Paginate from '../components/Paginate'
import {
  listSessions,
  deleteSession,
  createSession,
} from '../actions/sessionActions'

import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { SESSION_CREATE_RESET } from '../constants/sessionConstants'


const ProfileScreen = ({ location, history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isTutor, setIsTutor] = useState(false)
  const [description, setDescription] = useState('')
  const [sessions, setSessions] = useState('')


  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)


  const sessionCreate = useSelector((state) => state.sessionCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    session: createdSession,
  } = sessionCreate

  const sessionDelete = useSelector((state) => state.sessionDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = sessionDelete



  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      dispatch({ type: SESSION_CREATE_RESET })
      if (successCreate) {
        history.push(`/sessions/${createdSession._id}/edit`)
      } else {
        dispatch(listSessions('', pageNumber))
      }

      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))

      } else {
        setName(user.name)
        setEmail(user.email)
        setIsTutor(user.isTutor)
        setImage(user.image)
        setDescription(user.description)
        setSessions(user.sessions)
      }
    }
  }, [dispatch, history, userInfo, user, success, successCreate,
    createdSession, pageNumber,])



  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password, isTutor, description, image, sessions }))
    }
  }
  const createSessionHandler = () => {
    dispatch(createSession())
  }

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteSession(id))
    }
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        { }
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Col md={6}>
              <Image src={user.image} alt={user.name} fluid />
            </Col>
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='description'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>



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
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Form.Group controlId='isTutor'>
              <Form.Check
                type='checkbox'
                label='Is Tutor'
                checked={isTutor}
                onChange={(e) => setIsTutor(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </Col>
      <Col className='text-right'>

        <Link to='/sessions'>
          <Button className='my-3'>
            Manage Sessions
          </Button>
        </Link>
      </Col>
    </Row >


  )
}

export default ProfileScreen
