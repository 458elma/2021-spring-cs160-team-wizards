import mongoose from 'mongoose'

const chatboxSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    receiver: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    message: [
        {
            content: {
                type: String,
                require: true
            },
            date: {
                type: Date,
                require: true,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
})
const Chatbox = mongoose.model('Chatbox', chatboxSchema)

export default Chatbox