import React, { useState, useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import User from '../components/User'

const HomeScreen = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async() => {
            const res = await axios.get('/users')
            setUsers(res.data)
        }

        fetchUsers()
    }, [])

    return (
        <div>
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
