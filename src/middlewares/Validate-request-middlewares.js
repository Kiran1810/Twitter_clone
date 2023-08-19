
const {StatusCodes}=require("http-status-codes")
const AppError=require("../utils/errors/app-error")
const { UserService}=require("../services")
const{ErrorResponse}=require("../utils/common")


function validateAuthRequest(req, res, next){
if(!req.body.email){
    ErrorResponse.message="user not found during the authentication ";
    ErrorResponse.error=  new AppError(["Email is not found in the incoming request"],StatusCodes.BAD_REQUEST)
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(ErrorResponse)
}
if(!req.body.password){
    ErrorResponse.message='user not found during the authentication';
    ErrorResponse.error= new AppError(["password not found in the incoming request"], StatusCodes.BAD_REQUEST)
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(ErrorResponse)
}
next();
}

 async function authentication(req,res,next){
    try{
const response = await UserService.isAuthenticated(req.headers["x-access-token"]);
if(response){
    req.user=response;
    next();
}
    }
catch(error){
    return res
    .status(error.statusCode)
    .json(error);
}
}


module.exports= {validateAuthRequest ,authentication};