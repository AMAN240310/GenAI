const mongoose = require('mongoose')

const blacklistToken = new mongoose.Schema({
  token: {
    type:String,
    require: [ true , "token is requoired to be added in blacklist "]

  }
}, {
    timestamps:true
}

)

const tokenblacklistModel = mongoose.model("blacklist", blacklistToken)

module.exports = tokenblacklistModel