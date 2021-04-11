import React , {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
const SearchBox = ({history}) => {
    const[keyword, setKeyword]= useState('')

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        if(keyword.trim())
        {
             history.push(`/search/${keyword}`)
        }
         else
        {
            history.push('/')
        }
    }

    return (
        <Form onSubmit = {onSubmitHandler} inline>
            <Form.Control 
                type = 'text' 
                name='q' 
                onChange={(e)=> setKeyword (e.target.value)}
                placeholder='Search Subject...'
                className= 'mx-auto'
            ></Form.Control>
            <Button type ='submit' varient ='outline-dark' className='mx-auto'>
                Search
            </Button>
        </Form>
    )
}
export default SearchBox
