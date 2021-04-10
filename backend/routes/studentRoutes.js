import express from 'express'
import handler from 'express-async-handler'
const studentRoutes = express.Router()
import Student from '../models/studentModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//GET /students/login
studentRoutes.get('/login', (req, res) => {
    res.send('THIS IS THE LOG IN PAGE')
})
//GET /students/signup
studentRoutes.get('/signup', (req, res) => {
    res.send('THIS IS THE SIGN UP PAGE')
})

//GET / students
studentRoutes.get('/', handler(async (req, res) => {
    const students = await Student.find({})
    res.json(students)
}))

//GET /students/:id
studentRoutes.get('/:id', handler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (student) {
        res.json(student)
    } else {
        res.status(404).json({ message: 'student not found' })
    }
}))


//POST /students/signup create a new account
studentRoutes.post('/signup', handler(async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    const newStudent = new Student({
        name,
        email,
        password: hashedPassword
    })

    await newStudent.save()
    res.send({
        name,
        email,
        hashedPassword
    })
    // res.redirect('/students/login')
}))


// POST /students/login log in into account
studentRoutes.post('/login', handler(async (req, res) => {
    const { email, password } = req.body
    const student = await Student.findOne({ email })
    const validPassword = await bcrypt.compare(password, student.password)
    if (student && validPassword) {
        res.json({
            _id: student._id,
            name: student.name,
            email: student.email,
            token: jwt.sign({ _id: student._id }, process.env.JWT_KEY, {
                expiresIn: '1d'
            }),

        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
}))




export default studentRoutes