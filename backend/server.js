import express from 'express'
import dotenv from 'dotenv'
import users from './data/users.js'

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

app.get('/users/:id', (req, res)=>{
    const user = users.find((u) => u._id === req.params.id)
    res.json(user)
})


app.get('/users/:id/chatbox', (req, res)=>{
    const user = users.find((u) => u._id === req.params.id)
    res.send(`This is in user ${req.params.id}`)
    //res.json(user)
})


app.listen(PORT, console.log('The server has started'))