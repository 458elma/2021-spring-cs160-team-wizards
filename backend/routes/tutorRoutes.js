import express from 'express'
import handler from 'express-async-handler'
const tutorRoutes = express.Router()
import Tutor from '../models/tutorModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//GET /tutors/login
tutorRoutes.get('/login', (req, res) => {
    res.send('THIS IS THE LOG IN PAGE')
})
//GET /tutors/signup
tutorRoutes.get('/signup', (req, res) => {
    res.send('THIS IS THE SIGN UP PAGE')
})

//GET / tutors
tutorRoutes.get('/', handler(async (req, res) => {
    const tutors = await Tutor.find({})
    res.json(tutors)
}))

//GET /tutors/:id get tutor profile
tutorRoutes.get('/:id', handler(async (req, res) => {
    const tutor = await Tutor.findById(req.params.id)
    if (tutor) {
        res.json(tutor)
    } else {
        res.status(404).json({ message: 'tutor not found' })
    }
}))


//POST /tutors/signup create a new account
tutorRoutes.post('/signup', handler(async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    const newTutor = new Tutor({
        name,
        email,
        password: hashedPassword
    })

    await newTutor.save()
    res.send({
        name,
        email,
        hashedPassword
    })
    // res.redirect('/tutors/login')
}))


// POST /tutors/login log in into account
tutorRoutes.post('/login', handler(async (req, res) => {
    const { email, password } = req.body
    const tutor = await Tutor.findOne({ email })
    const validPassword = await bcrypt.compare(password, tutor.password)
    if (tutor && validPassword) {
        res.json({
            _id: tutor._id,
            name: tutor.name,
            email: tutor.email,
            token: jwt.sign({ _id: tutor._id }, process.env.JWT_KEY, {
                expiresIn: '1d'
            }),

        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
}))




export default tutorRoutes