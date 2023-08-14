const express=require('express');

const {connect}=require('./config/database');
//const {Tweet} =require('./models/tweets.js');
//const{ Hashtag }=require('./models/hashtag.js')
 const apiRoute=require('./routes')
 const { ServerConfig } = require('./config');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoute)

app.listen(ServerConfig.PORT,async()=>{
    console.log(`server started on PORT: ${ServerConfig.PORT}`)
    connect();

 /*Tweet.create(
   { 
     content:"this is my twiter app",
     likes:5,
     noOfRetweets:9,
    comment:"this is the first comment"
 })

 Hashtag.create({
    text: " goa",
    tweetes:["64d09a8455e4d1a0081720a7"]    
        
        
 })

  const tweetRepo= new TweetRepository();
  let tweets= await tweetRepo.getAllTweets('64d09b4b1af5e4f276e1da83');
  console.log(tweets);*/
})



