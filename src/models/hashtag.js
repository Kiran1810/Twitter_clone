const mongoose=require('mongoose')
const {ObjectId}=require("bson");

const hashtagSchema = new mongoose.Schema({
  text:{
type:String,
required:true,
unique:true
  },
tweet:{
type:mongoose.Schema.ObjectId
}

})


const Hashtag= mongoose.model('Hashtag',hashtagSchema )

module.exports=Hashtag
