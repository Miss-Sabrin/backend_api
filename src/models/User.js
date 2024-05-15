const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        password:{type:Number},
        email:{type:String},
        photo:{type:String,default:"https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?auto=compress&cs=tinysrgb&w=600"}
    },{
        timestamps:true,
    }
)

module.exports=mongoose.model("User",UserSchema)