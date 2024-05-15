const Category=require('../models/Category');

module.exports={
    //todo create user 👍
    createCategory:async(req,res)=>{
        try{
            const {name,description,photo}=req.body;

        const category= await Category({
                name:name,
                description:description,
                photo:photo,
               
            }).save();


            res.status(200).json({status:"success",data:category})

        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },

    ///todo get data
    getCategories:async(req,res)=>{
        try{

       const categories=await Category.find()


            res.status(200).json({status:"success",data:categories})

        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },
    //todo find by id
    getCategory:async(req,res)=>{
        try{
            const category=await Category.findById(req.params.id);


            res.status(200).json({status:"success",data:category})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },
     ///todo delete user
     deleteCategory:async(req,res)=>{
        try{
            const category=await Category.findByIdAndDelete(req.params.id);


            res.status(200).json({status:"success",data:'succesfullay deleted'})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },
     //todo update user
     updateCategory:async(req,res)=>{
        try{
            const category=await Category.findByIdAndUpdate(req.params.id, req.body,{
                new:true,
        });


            res.status(200).json({status:"success",data:category})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    }

};