const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/foodCourt")
mongoose.connect("mongodb://127.0.0.1/foodCourt")
.then(()=>console.log("database is connected"))
.catch((error)=>console.log(error))