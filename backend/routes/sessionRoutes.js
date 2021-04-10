import express from 'express'
import handler from 'express-async-handler'
const sessionRoutes = express.Router()
import Session from '../models/sessionModel.js'

//GET /sessions
sessionRoutes.get('/', handler(async (req, res) => {
    const sessions = await Session.find({})
    res.json(sessions)
}))

//GET /sessions/:id
sessionRoutes.get('/:id', handler(async (req, res) => {
    const session = await Session.findById(req.params.id)
    if (session) {
        res.json(session)
    } else {
        res.status(404).json({ message: 'session not found' })
    }
}))

//POST /sessions/create
sessionRoutes.post('/create', handler(async (req, res) => {
    const { name, description } = req.body
    const newSession = new Session({
        name,
        description
    })

    await newSession.save()
    // res.send({
    //     name,
    //     email,
    //     hashedPassword
    // })
    res.redirect(`/${newSession._id}`)
}))

//PUT /sessions/update
sessionRoutes.put('/:id', handler(async (req, res) => {
    const session = await Session.findByIdAndUpdate(req.params.id, { ...req.body.name })
    res.redirect(`/${newSession._id}`)
}))


export default sessionRoutes