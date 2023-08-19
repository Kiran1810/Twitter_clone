const mongoose=require('mongoose');
const {ObjectId}=require('bson')


const likeSchema=new mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId
},

docModel:{
    type:String,
    required:true,
    enum:["Tweet","Comment"]
    },

likable:{
    type:mongoose.Schema.Types.ObjectId,
     required:true,
     refPath:'docModel'
    }
})
const Like= mongoose.model('Like',likeSchema)

module.exports={Like};