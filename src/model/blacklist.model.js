const mongoose = required('mongoose')

const blacklistToken = new mongoose.Schema({
  token: {
    type:String,
    require: [ true , "token is requoired to be added in blacklist "]

  }
}, {
    timestamp:true
}

)

const tokenblcaklist = mongoose.model("blaklist ", blacklistToken)

module.export = tokenblcaklist