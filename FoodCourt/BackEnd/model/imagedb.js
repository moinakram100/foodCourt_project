const mongoose = require("mongoose")

const imgschema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    image : {
        data : Buffer,
        contentType : String
    }
})
 
const image = mongoose.model('image',imgschema)
module.exports = image