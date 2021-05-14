import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true }
        ,
    rating: { 
        type: Number, 
        required: true 
    },
    comment: { 
        type: String, 
        required: true 
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const sessionSchema = mongoose.Schema(
  {
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'User'
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
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Session = mongoose.model('Session', sessionSchema)

export default Session
