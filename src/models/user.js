const mongoose=require('mongoose');
const {ObjectId}=require('bson')
const bcrypt=require('bcrypt')


const userSchema=new mongoose.Schema({

email:{
   type:String,
   required:true,
   unique:true
},
password:{
    type:String
},
bio:{
    type:String
},
tweets:{
    type:mongoose.Schema.Types.ObjectId
},
name:{
    type:String
}
});
userSchema.pre('save',function(next) {
const user=this;
const encryptedPassword=bcrypt.hashSync(user.password,8)
user.password=encryptedPassword;
next();
})


const User= mongoose.model('User',userSchema)

module.exports= {User};