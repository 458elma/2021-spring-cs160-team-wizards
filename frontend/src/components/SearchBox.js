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
                className= 'py-3 px-md-5'
                size ='6'
                
            ></Form.Control>
            <Button size ='6' type ='submit' varient ='outline-dark' className='py-3 px-sm-5'>
                Get Help
            </Button>
        </Form>
    )
}
export default SearchBox
