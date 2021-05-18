import express from 'express'
const router = express.Router()
import {
    getSessions,
    getSessionById,
    deleteSession,
    createSession,
    updateSession,
    createSessionReview,
    getTopSessions,
} from '../controllers/sessionController.js'
import { protect, tutor } from '../middleware/authMiddleware.js'

router.route('/').get(getSessions).post(protect, tutor, createSession)
router.route('/:id/reviews').post(protect, createSessionReview)
router.get('/top', getTopSessions)
router
    .route('/:id')
    .get(getSessionById)
    .delete(protect, tutor, deleteSession)
    .put(protect, tutor, updateSession)

export default router
