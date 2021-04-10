import mongoose from 'mongoose'

const tutorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: false,
        default: ''

    },
    gender: {
        type: String,
        require: false,
        default: ''

    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Review'
        }
    ],
    sessions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Session'
        }
    ],
    chatbox: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Chatbox'
        }
    ],
    walllet: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Wallet'
    }
}, {
    timestamps: true
})

const Tutor = mongoose.model('Tutor', tutorSchema)

export default Tutor