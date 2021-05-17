import asyncHandler from 'express-async-handler'
import Session from '../models/sessionModel.js'

// @desc    Fetch all sessions
// @route   GET /sessions
// @access  Public
const getSessions = asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }
        : {}

    const count = await Session.countDocuments({ ...keyword })
    const sessions = await Session.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))

    res.json({ sessions, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single session
// @route   GET /sessions/:id
// @access  Public
const getSessionById = asyncHandler(async (req, res) => {
    const session = await Session.findById(req.params.id)

    if (session) {
        res.json(session)
    } else {
        res.status(404)
        throw new Error('Session not found')
    }
})

// @desc    Delete a session
// @route   DELETE /sessions/:id
// @access  Private/Tutor
const deleteSession = asyncHandler(async (req, res) => {
    const session = await Session.findById(req.params.id)

    if (session) {
        await session.remove()
        res.json({ message: 'Session removed' })
    } else {
        res.status(404)
        throw new Error('Session not found')
    }
})

// @desc    Create a session
// @route   POST /sessions
// @access  Private/Tutor
const createSession = asyncHandler(async (req, res) => {
    const session = new Session({
        name: 'Sample name',
        price: 0,
        tutor: req.user._id,
        image: '/uploads/sessionSample.png',
        category: 'Sample category',
        studentNum: 1,
        numReviews: 0,
        description: 'Sample description',
    })

    const createdSession = await session.save()
    res.status(201).json(createdSession)
})

// @desc    Update a session
// @route   PUT /sessions/:id
// @access  Private/Tutor
const updateSession = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        description,
        image,
        category,
        studentNum,
    } = req.body

    const session = await Session.findById(req.params.id)

    if (session) {
        session.name = name
        session.price = price
        session.description = description
        session.image = image
        session.category = category
        session.studentNum = studentNum

        const updatedSession = await session.save()
        res.json(updatedSession)
    } else {
        res.status(404)
        throw new Error('Session not found')
    }
})

// @desc    Create new review
// @route   POST /sessions/:id/reviews
// @access  Private
const createSessionReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    const session = await Session.findById(req.params.id)

    if (session) {
        const alreadyReviewed = session.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        )

        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Session already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        }

        session.reviews.push(review)

        session.numReviews = session.reviews.length

        session.rating =
            session.reviews.reduce((acc, item) => item.rating + acc, 0) /
            session.reviews.length

        await session.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Session not found')
    }
})

// @desc    Get top rated sessions
// @route   GET /sessions/top
// @access  Public
const getTopSessions = asyncHandler(async (req, res) => {
    const sessions = await Session.find({}).sort({ rating: -1 }).limit(3)

    res.json(sessions)
})

export {
    getSessions,
    getSessionById,
    deleteSession,
    createSession,
    updateSession,
    createSessionReview,
    getTopSessions,
}
