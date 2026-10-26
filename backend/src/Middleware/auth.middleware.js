const jwt  = require("jsonwebtoken")

async function authUser(req, res , next ){
    const token = req.cookies.token

    if(!token){
        return res.status(400).json({
            message: "token is not provided"
        })
    }
    const istokenblacklist = await tokenblacklistModel.findOne({
        token 
    })
    
    if( istokenblacklist  ){
        return res.status(401).json({
            message: " the Token in invalid"
        })
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        req.user = decoded
        next()

    }catch(err){
        return res.status(401).json({
            message: "Invalid toekn "
        })
    }
}

module.exports = {authUser}