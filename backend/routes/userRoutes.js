import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login', authUser)
router
    .route('/:id')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
// router
//     .route('/:id')
//     .get(protect, getUserById)
//     .put(protect, updateUser)

export default router
