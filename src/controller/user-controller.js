const {StatusCodes}=require("http-status-codes")

const { UserService}=require("../services")
const{SuccessResponse,ErrorResponse}=require("../utils/common")

async function signup(req,res){

  try{ 
        console.log("inside the controoleer")   
    const user=await UserService.create({
      email:req.body.email,
      password:req.body.password,
      /*bio:req.body.bio,
      name:req.body.name*/

       })
       console.log("outside the con");
      SuccessResponse.data=user;
       return res
       .status(StatusCodes.CREATED)
       .json(
            SuccessResponse
        );
   }  
catch(error){
        console.log(error);
   ErrorResponse.error=error
       return res
       .status(StatusCodes.BAD_REQUEST)
       .json(
           ErrorResponse
       )
       
}}


module.exports={ signup}

