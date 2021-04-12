import express from 'express'
import dotenv from 'dotenv'
import users from './data/users.js'
import students from './data/students.js'
import tutors from './data/tutors.js'

import connectDB from './config/db.js'

dotenv.config()

const PORT = process.env.PORT || 8000

connectDB()

const app = express()

app.get('/', (req, res)=>{
    res.send(`Server is running on port ${PORT}`)
})

app.get('/users', (req, res)=>{
    res.json(users)
})

app.get('/users/students/:id', (req, res)=>{
    const user = students.find((u) => u._id === req.params.id)
    res.json(user)
})

app.get('/users/tutors/:id', (req, res)=>{
    const user = tutors.find((u) => u._id === req.params.id)
    res.json(user)
})

app.get('/admins/students/:id', (req, res)=>{
    const user = students.find((u) => u._id === req.params.id)
    res.json(user)
})

app.get('/admins/tutors/:id', (req, res)=>{
    const user = tutors.find((u) => u._id === req.params.id)
    res.json(user)
})


app.listen(PORT, console.log('The server has started'))