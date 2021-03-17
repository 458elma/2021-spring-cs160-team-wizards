import mongoose from 'mongoose'

const sessionSchema = mongoose.Schema({
    tutor:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Tutor'
    },
    students:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Student'
        }
    ],
    studentNum:
    {
        type : Number,
        required: true,
        default: 1
    },
    name: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    description:{
        type: String,
        required: false
    },
    paymentMethod:
    {
        type: String,
        required: true
    },
    paymentResult:
    {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String}
    },
    taxPrice:{
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice:{
        type: Number,
        required: true,
        default: 0
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false
    },
    paidAt:{type: Date},
    
}, {
    timestamps: true
})

const Session = mongoose.model('Session', sessionSchema)

export default Session