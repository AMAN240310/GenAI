const userModel = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
import tokenblacklistModel from "../model/blacklist.model.js"


async function registerUserController(req, res){
    const {username,email,password} = req.body

    if( !username || !email || !password ){
        return res.status(400).json({
            message:"Please provide the useranme , email and password"
        })
        }
        const isUserExiests = await userModel.findOne({
            $or:[{username} , {email}]
        })
        if( isUserExiests ){
            return res.status(400).json({
                message: "Account already exits "
            })
        }

        const hash = await bcrypt.hash(password,10)
        
        const user = await userModel.create({
            username,
            email,
            password:hash
        })

        const token = jwt.sign(
         {id: user._id ,username:user.username},
         process.env.JWT_SECRET,
         {expiresIn :"1d"}   
        )

        res.cookie("token", token)

        res.status(201).json({
            message:"user register successfully",
            user:{
                id:user._id,
                username:user.username,
                email:user.email
            }
        })
}


async function loginUserController(req,res) {
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    if( !user ){
        return res.status(400).json({
            message:" the email you are trying to access is does not exits "
        })
    }

    const isPassword = await bcrypt.compare(password,user.password)

    if(!isPassword ){
        return res.status(400).json({
            message: " the password you given is not correct "
        })
    }

    const token = jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token", token)
    res.status(200).json({
        message: " User Logedin succesfully",
        user:{
            _id:user._id,
            username: user.username,
            email:user.email,

        }
    })
}

async function logoutuisr(req,res) {
     const token = req.cookies.token
     if( token ){
        await tokenblacklistModel.create({token})
     }
     res.clearCookie("token")
     res.status(200).json({
        message: "user Logged out succesfully"
     })
}

async function getMEcontoller(req, res ) {
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message:" user detila fethched successfully ",
        user:{
            id:user._id,
            username:user.username,
         email:user.email     
           }
    })
}

module.exports = {registerUserController, loginUserController, logoutuisr , getMEcontoller}