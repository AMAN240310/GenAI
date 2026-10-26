const {Router} = require('express')

const authMiddleware = require("../Middleware/auth.middleware")

const authcontroller = require("../controller/auth.controller")

const authRouter = Router()



authRouter.post("/register", authcontroller.registerUserController )



authRouter.post("/api/auth/api/login", authcontroller.loginUserController)

authRouter.get("/logout" , authcontroller.logoutuisr)

authRouter.get("/get-me", authMiddleware.authUser, authcontroller.getMEcontoller)

module.exports = authRouter