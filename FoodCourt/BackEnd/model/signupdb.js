const mongoose = require("mongoose")


const foodSchema = mongoose.Schema({
    name : {
        type:String,
        required: true,
        lowercase:true,
        trim:true,
        minlength: [3,"minimum 3 alphabets are required"],
        maxlength:30
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
    },
    mobile:{
        type: Number,
        trim: true,
        unique: true,
        required: 'Mobile number must be required',
        minlength: 10
    },
    password:{
        type:String,
        required:true,
        minlength:[5,"password must be at least 6 characters"]
    }
})

const foodsignup = mongoose.model("foodsignup",foodSchema)
module.exports = foodsignup