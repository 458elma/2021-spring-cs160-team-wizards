import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        ref: 'Student'
    }
    ,
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Review = mongoose.model('Review', reviewSchema)

export default Review