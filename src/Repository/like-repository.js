const {Like}=require('../models/likes.js')
const CrudRepository=require('./crud-repository.js')


class LikeRepository extends CrudRepository{
   constructor(){
       super(Like);
   }}
   module.exports= {LikeRepository};