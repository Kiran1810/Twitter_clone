const mongoose=require('mongoose');
const {ObjectId}=require('bson')


const userSchema=new mongoose.Schema({

email:{
   type:String,
   required:true,
   unique:true
},
password:{
    type:Number
},
bio:{
    type:String
},
tweets:{
    type:mongoose.Schema.Types.ObjectId
}
})

const User= mongoose.model('User',userSchema)

module.exports= User;