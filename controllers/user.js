import {User} from '../Models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register =  async (req,res)=>{
    const {name,gmail,password} = req.body

   try {
    let user = await User.findOne({gmail})

    if(user) return res.json({message:"User Already exist"});

    const hashPass = await bcrypt.hash(password,10)

    user = await User.create({name,gmail,password:hashPass})

    res.json({message:"User Register Successfully..!",user})
    
   } catch (error) {
    res.json({message:error})
   }
}

export const login = async (req,res) =>{
    const {gmail,password} = req.body

    try {
        let user = await User.findOne({gmail});
        // console.log("User is coming from login ",user)

        if(!user) return res.json({message:"User not exist..!"})

        console.log("User is ",user);
        const hashPass = await bcrypt.hash(password,10);
        

        const validPass = await bcrypt.compare(password,user.password);
        console.log("Valid Password is ",validPass);
        
        

        if(!validPass) return res.json({message:"Invalid credentials"});
      
        const token = jwt.sign({userId:user._id},"!@#$%^&*()",{
            expiresIn:'1d'
        })
        console.log("Token is ",token);
        
        res.json({message:`Welcome ${user.name}`,token})

    } catch (error) {
        res.json({message:error.message})
    }
}


export const profile = async (req,res) =>{
    res.json({user : req.user})
}