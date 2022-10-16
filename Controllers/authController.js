const User = require('./../Models/userModel')

exports.signUp = async(req,res)=>{
    const user = await User.create(req.body)
    res.json(req.body)
}