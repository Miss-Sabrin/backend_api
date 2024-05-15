//const user = require('../models/user');
const User=require('../models/user');


module.exports={
    //todo create user 👍
    createUser:async(req,res)=>{
        try{
            const {name,password,email}=req.body;

        const user= await User({
                name:name,
                password:password,
                email:email,
            }).save();


            res.status(200).json({status:"success",data:user})


        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },

    ///todo get data
    getUsers:async(req,res)=>{
        try{

       const users=await User.find()


            res.status(200).json({status:"success",data:users})

        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },

    //todo find by id
    getUser:async(req,res)=>{
        try{
            const user=await User.findById(req.params.id);


            res.status(200).json({status:"success",data:user})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },
    ///todo delete user
    deleteUser:async(req,res)=>{
        try{
            const user=await User.findByIdAndDelete(req.params.id);


            res.status(200).json({status:"success",data:'succesfullay deleted'})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },
    //todo update user
    updateUser:async(req,res)=>{
        try{
            const user=await User.findByIdAndUpdate(req.params.id, req.body,{
                new:true,
        });


            res.status(200).json({status:"success",data:user})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    }
};




    
















