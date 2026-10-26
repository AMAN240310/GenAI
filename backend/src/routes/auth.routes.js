const {Router} = require('express')

const authMiddleware = require("../Middleware/auth.middleware")

const authcontroller = require("../controller/auth.controller")

const authRouter = Router()



authRouter.post("/register", authcontroller.registerUserController )



authRouter.post("/login", authcontroller.loginUserController)

authRouter.post("/logout", authcontroller.logoutuisr)

authRouter.get("/get-me", authMiddleware.authUser, authcontroller.getMEcontoller)

module.exports = authRouter