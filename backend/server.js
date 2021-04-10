import express from 'express'
import dotenv from 'dotenv'
import tutorRoutes from './routes/tutorRoutes.js'
import studentRoutes from './routes/studentRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'

import connectDB from './config/db.js'

dotenv.config()

const PORT = process.env.PORT || 8000

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`)
})

app.use('/users/students', studentRoutes)
app.use('/users/tutors', tutorRoutes)
app.use('/sessions', sessionRoutes)



// app.get('/users/:id/chatbox', (req, res) => {
//     // const user = users.find((u) => u._id === req.params.id)
//     // res.json(user)
//     res.send(`you are in ${req.params.id} chatbox`)
// })


app.listen(PORT, console.log('The server has started'))