
const {StatusCodes}=require("http-status-codes")
const  {UserRepository}=require("../Repository");
const AppError=require("../utils/errors/app-error")

const bcrypt=require("bcrypt")




const userRepo=new UserRepository();


async function create(data){
    try{
      console.log("inside service")
     const user = await userRepo.create(data);
     console.log("outside the service")
    return user;
  }
     catch(error){
       console.log(error)
       throw new AppError('Cannot create a new user object', StatusCodes.INTERNAL_SERVER_ERROR);
     }
  }

  

 module.exports={create}


