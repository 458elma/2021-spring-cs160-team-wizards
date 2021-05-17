import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listSessionDetails, updateSession } from '../actions/sessionActions'
import { SESSION_UPDATE_RESET } from '../constants/sessionConstants'
import { getUserDetails, updateUserProfile } from '../actions/userActions'


const SessionEditScreen = ({ match, history }) => {
  const sessionId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [studentNum, setStudentNum] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [tutor, setTutor] = useState('')
  const dispatch = useDispatch()

  const sessionDetails = useSelector((state) => state.sessionDetails)
  const { loading, error, session } = sessionDetails

  const sessionUpdate = useSelector((state) => state.sessionUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = sessionUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SESSION_UPDATE_RESET })
      history.push('/sessions')
    } else {
      if (!session.name || session._id !== sessionId) {
        dispatch(listSessionDetails(sessionId))
      } else {
        setName(session.name)
        setPrice(session.price)
        setImage(session.image)
        setCategory(session.category)
        setStudentNum(session.studentNum)
        setDescription(session.description)
        setTutor(session.tutor)
      }
    }
  }, [dispatch, history, sessionId, session, successUpdate])

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

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateSession({
        _id: sessionId,
        name,
        price,
        image,
        category,
        description,
        studentNum,
        tutor
      }),
      updateUserProfile({ sessions: sessionId })
    )
  }

  return (
    <>
      <Link to='/sessions' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Session</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

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


            <Form.Group controlId='studentNum'>
              <Form.Label>Number of Students</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter a Number'
                value={studentNum}
                onChange={(e) => setStudentNum(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default SessionEditScreen
