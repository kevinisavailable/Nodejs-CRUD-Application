const User = require('./../Models/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.signUp = async(req,res)=>{
    const password = await bcrypt.hash(req.body.password,saltRounds)
    const data = {...req.body,password}
    const user = await User.create(data)
    res.json({user})
}

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
  
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      res.status(404).json({ error: "User not found" });
      return;
    }
}