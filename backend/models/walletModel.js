import mongoose from 'mongoose'

const walletSchema = mongoose.Schema({
    cardNumber: {
        type: String,
        require: false
    },
    balance: {
        type: Number,
        require: false,
        default: 0,
    },
    transaction: [
        {
            type: Number,
            require: false
        }
    ],
}, {
    timestamps: true
})
const Wallet = mongoose.model('Wallet', walletSchema)

export default Wallet