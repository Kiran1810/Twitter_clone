
const {TweetRepository}=require('../Repository/tweet-repository')
const {HashtagRepository}=require('../Repository/hashtag-repository')


const tweetRepo= new TweetRepository();
const hashtagRepo= new HashtagRepository();

async function create(data){
    try{
        
const content=data.content;
const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).
map((tag)=> tag.substring(1).toLowerCase());

const tweet=await tweetRepo.create(data);

let alreadyPresentTags= await hashtagRepo.findByName(tags)

let textOfPresentTags = alreadyPresentTags.map(tags=> tags.text)
let newTags = tags.filter(tag=>!textOfPresentTags.includes(tag))
newTags = newTags.map(tag=>{
    console.log(newTags);
    return{
        text: tag,
        tweets:[tweet.id]}
       
    })
    console.log(alreadyPresentTags)
await hashtagRepo.bulkCreate(newTags);
alreadyPresentTags.forEach((tag)=>
{
    tag.tweet.push(tweet.id);
    tag.save();
})
return tweet;
}
 catch(error){
    console.log(error);
  throw error ;
 
}

}
async function getTweet(tweetId) {
    const tweet = await tweetRepo.getTweet(tweetId);
    return tweet;
}


module.exports={create,getTweet}
