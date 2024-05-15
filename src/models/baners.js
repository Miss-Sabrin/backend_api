const mongoose=require('mongoose');

const BannerSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        description:{type:String},
        image:{type:String,default:"https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?auto=compress&cs=tinysrgb&w=600"}





    }
);
module.exports=mongoose.model("Banner",BannerSchema)
