import mongoose from 'mongoose'

const tutorSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    password: {
        type : String,
        required : true
    },
    profileImage:{
        type: String,
        required: true
    },
    gender:{
        type: String
    },
    isAdmin: {
        type : Boolean,
        required : true,
        default: false
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    reviews:[
        {
            review:{
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        }
    ],
    numReviews
    :{
        type: Number,
        required: true,
        default: 0
    },
    sessions: [Session]
}, {
    timestamps: true
})

const Tutor = mongoose.model('Tutor', tutorSchema)

export default Tutor