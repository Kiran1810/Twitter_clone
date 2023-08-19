const CrudRepository=require("./crud-repository")
const {User}=require("../models/user")

class UserRepository extends CrudRepository{
   constructor(){
      console.log("inside the repo")
      super(User)
      
   }
  

}


module.exports= UserRepository;