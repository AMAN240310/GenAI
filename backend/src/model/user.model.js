const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:[true, "account is already existes"],
        require:true,
    },

    password:{
        type:String,
        required:true,

    }

})

const userModel = mongoose.model("user",userSchema)

module.export = userModel