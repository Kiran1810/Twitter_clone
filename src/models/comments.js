const mongoose=require('mongoose');
const {ObjectId}=require('bson')


const commentSchema=new mongoose.Schema({
content:{
    type:String,
    required:true

},

user:{
    type:mongoose.Schema.Types.ObjectId
},

comment:{
    type:String
},

docModel:{
    type:String,
    required:true,
    enum:["Tweet","Comment"]
    },

Commentable:{
    type:mongoose.Schema.Types.ObjectId,
     required:true,
     refPath:'docModel'
    }
})
const Comment= mongoose.model('Comment',commentSchema)

module.exports= {Comment};