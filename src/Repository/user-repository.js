const CrudRepository=require("./crud-repository")
const {User}=require("../models/user")

class UserRepository extends CrudRepository{
   constructor(){
      console.log("inside the repo")
      super(User)
      
   }
  

 async getUserByEmail(email){
   const res = await User.findOne({email:email});
   return res
 }

}


module.exports= UserRepository;