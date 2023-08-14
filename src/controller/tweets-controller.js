const { StatusCodes } = require('http-status-codes');

const {TweetService}=require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function create(req,res){
    try{

const tweet= await TweetService.create({
    content:req.body.content,
    likes:req.body.likes,
    noOfRetweets:req.body.noOfRetweets,
    comment:req.body.comment

});
SuccessResponse.data = tweet;
return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
} 
catch(error) {

ErrorResponse.error = error;
console.log(error);
return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
}
}

async function getTweet(req,res){
    try{
const response= await TweetService.getTweet(req.params.id);

SuccessResponse.data = response;
return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
} catch(error) {
console.log(error);
ErrorResponse.error = error;
return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
}
}

module.exports={create,getTweet}