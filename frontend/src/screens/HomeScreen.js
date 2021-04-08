import React, { useState, useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import User from '../components/User'
import CheckBox from '../components/CheckBox'
import CourseBox from '../components/CourseBox'
const HomeScreen = () => {

    const [users, setUsers] = useState([])
    const [Filters, setFilters] = useState({
        tutorRequirements:[],
        courses:[]
    })
    useEffect(() => {
        const fetchUsers = async() => {
            const res = await axios.get('/users')
            setUsers(res.data)
        }

        fetchUsers()
    }, [])
    const showResults=(tempFilters)=>
    {

    }
    //han dling the checkbox filter
    const handleFilters=(filters, group)=>
    {
        //getting logs from the checked boxes
        console.log(filters)
        //making new filters
        const tempFilters={...Filters}
        tempFilters[group]=filters
        if(group === "courses")
        {

        }
        showResults(tempFilters)
        setFilters(tempFilters)

    }
   
    return (
        <div>
          {/* organizing the filter in a row */}
          <Row gutter={[14,14]}>
              <Col lg={10} xs={20}>
                  <CheckBox
                     //handleFilters={filters=>handleFilters(filters,"tutorRequirements")}/>
                  />
              </Col>
              <Col lg={10} xs={20}>
                  <CourseBox
                     //handleFilters={filters=>handleFilters(filters,"courses")}
              />

              </Col>
          </Row>
          
        
            <h1>Users</h1>
            <Row>
                {users.map(user => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <User user={user}></User>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
