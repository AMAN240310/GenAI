const mongoose = require("mongoose")

async function connectedToDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongodb")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectedToDB;