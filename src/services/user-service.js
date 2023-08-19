
const {StatusCodes}=require("http-status-codes")
const  {UserRepository}=require("../Repository");
const AppError=require("../utils/errors/app-error")
const jwt= require('jsonwebtoken')
const bcrypt=require("bcrypt")
const {ServerConfig }=require('../config')




const userRepo=new UserRepository();


async function create(data){
    try{
     const user = await userRepo.create(data);
    return user;
  }
     catch(error){
       console.log(error)
       throw new AppError('Cannot create a new user object', StatusCodes.INTERNAL_SERVER_ERROR);
     }
  }


  async function SignIn(data){
   try{
const  user=await userRepo.getUserByEmail(data.email);
if(!user){
   throw new AppError("cannot find the user with the same email",StatusCodes.NOT_FOUND);
   }
const matchedPassword= checkPassword(data.password, user.password);
console.log("matched password");
   if(!matchedPassword){
      throw new AppError("password is not valid", StatusCodes.BAD_REQUEST)
   }
return createToken({id:user.id,email:user.email})
   }
   catch(error){
      console.log(error)
      throw error;

   }
  }


  async function isAuthenticated(token){
try{
       if(!token){
         throw new AppError("token is incorrect for the given user ", StatusCodes.BAD_REQUEST)
       }
       const user= verifyToken(token);
       return user;
}
catch(error){
   console.log("error is not being handled")
   return res
   .status(StatusCodes.BAD_REQUEST)
   .json(error);
}
  }



  function checkPassword(plainPassword,encryptedPassword){
   const res =  bcrypt.compareSync(plainPassword,encryptedPassword);
   return res ;

  }


  function  createToken(input){
  const res = jwt.sign(input,ServerConfig.JWT_SECRET_KEY,{expiresIn:ServerConfig.EXPIRES_IN})
  return res;
      }
  
  

function verifyToken(token){
   const res =jwt.verify(token,ServerConfig.JWT_SECRET_KEY)
   return res;
}




 module.exports={create,SignIn,isAuthenticated}


