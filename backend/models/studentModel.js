import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({

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
        required: false,
        default: ''

    },
    description: {
        type: String,
        required: false,
        default: ''

    },
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



const Student = mongoose.model('Student', studentSchema)

export default Student