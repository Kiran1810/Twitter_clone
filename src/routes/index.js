const express=require("express");
const {TweetController}=require('../controller');
const { InfoController } = require('../controller');
const {UserController}=require('../controller');
const  {ValidateRequestMiddlewares}=require('../middlewares')


const router=express.Router();

router.get('/info', InfoController.info);
router.post('/tweets',TweetController.create)
router.get('/tweets/:id',TweetController.getTweet)
router.post('/signup', ValidateRequestMiddlewares.validateAuthRequest ,UserController.signup);
router.post('/signin',  ValidateRequestMiddlewares.validateAuthRequest,ValidateRequestMiddlewares.authentication ,
UserController.signin);

module.exports=router