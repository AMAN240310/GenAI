const {Router} = require('express')

const authcontroller = require("../controller/auth.controller")

const authRouter = Router()



authRouter.post("/register", authcontroller.registerUserController )



authRouter.post("/api/login", authcontroller.loginUserController)


module.exports = authRouter