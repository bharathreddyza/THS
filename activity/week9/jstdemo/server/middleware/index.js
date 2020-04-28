const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    //get the token from req header 
    const token = req.header('x-auth-token')
    if(!token){
        return res.status(401).json({msg:"auth denied"})
    }

    // verify token 
    try{
        const decoded = jwt.verify(token,'secret',)
        console.log(decoded)
        req.user = decoded.usr
        next()
    }catch(err){
        res.status(401).json({msg:"Token is not valid"})
    }
}