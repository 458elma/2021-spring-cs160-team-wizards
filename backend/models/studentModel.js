import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
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
    reviews:[mongoose.Schema.Types.ObjectId],
    numReviews
    :{
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema)

export default Student