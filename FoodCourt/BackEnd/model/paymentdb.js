const mongoose = require("mongoose")


const payment = mongoose.Schema({
    card_name : {
        type:String,
        required: true,
        lowercase:true,
        trim:true,
        minlength: [3,"minimum 3 alphabets are required"],
        maxlength:30
    },
    card_num:{
        type: Number,
        trim: true,
        unique: true,
        required: 'Card number must be required',
        minlength: 10
    },
    card_type:{
        type:String,
        required:true,
    },
    card_cvv:{
        type:Number,
        minlength:3
    },
    card_expire:{
        type: String,
        default : Date.now()
    }
})

const payment_checkout = mongoose.model("payment_checkout",payment)
module.exports = payment_checkout