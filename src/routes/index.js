const express=require("express");
const {TweetController}=require('../controller');
const { InfoController } = require('../controller');

const router=express.Router();

router.get('/info', InfoController.info);
router.post('/tweets',TweetController.create)
router.get('/tweets/:id',TweetController.getTweet)

module.exports=router