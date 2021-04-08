import React , {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
const SearchBox = () => {
    const[keyword, setKeyword]= useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        // if(keyword.trim())
        // {
            // history.push(`/search/${keyword}`)
        // }
        // else
        // {
            // history.push(`/`)
        // }
    }

    return (
        <Form onSubmit = {submitHandler} inline>
            <Form.Control 
                type = 'text' 
                name='q' 
                onChange={(e)=> setKeyword (e.target.value)}
                placeholder='Search Tutors...'
                className= 'mr-sm-2ml-sm-5'
            ></Form.Control>
            <Button type ='submit' varient ='outline-success' className='p-2'>
                Search
            </Button>
        </Form>
    )
}
export default SearchBox
