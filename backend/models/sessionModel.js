import mongoose from 'mongoose'

const sessionSchema = mongoose.Schema({
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Tutor'
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Student'
        }
    ],
    studentNum:
    {
        type: Number,
        required: false,
        default: 1
    },
    name: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    schedule: [
        {
            type: Date,
            required: false
        }
    ],
    price: {
        type: Number,
        required: false
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Review'
        }
    ]
}, {
    timestamps: true
})

const Session = mongoose.model('Session', sessionSchema)

export default Session