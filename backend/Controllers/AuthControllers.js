const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.SignUp = async(req, res, next) => {
    try{
    const { email, username, password } = req.body;
    const existUser = await User.findOne({ email });
    if(existUser){
        return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ email, username, password });
    const token = createSecretToken(User._id);
    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
    });
    res.status(201).json({ message: "User created successfully", success:true ,user});
}catch(err){
    console.log(err);
}
};

module.exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
           return res.json({message:'All fields are required'}) ;
        }
        const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
     const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
      res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
} catch (error) {
    console.error(error);
  }
}
