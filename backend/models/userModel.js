import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
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

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', userSchema)

export default User