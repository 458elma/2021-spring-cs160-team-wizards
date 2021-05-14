import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
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
    image: {
        type: String,
        required: false,
        default: ''

    },
    gender: {
        type: String,
        require: false,
        default: ''

    },
    isTutor: {
        type: Boolean,
        require: true,
        default: false,
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

const User = mongoose.model('User', userSchema)

export default User