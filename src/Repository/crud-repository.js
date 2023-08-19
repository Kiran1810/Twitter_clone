class CrudRepository{
    constructor(model){
       this.model=model
    }
    
     async create(data){
       const create= await this.model.create(data);
       return create
     }
 
     async findOne(id){
       
       const responce =await this.model.findById(id)
       return responce
 
     }
 
 
 
     async findAll(){
       try{
          const responce=await this.model.find({})
      
       return responce
    }
       catch(error){
          console.log(error);
          throw error
       }
     }
 
     async delete(id){
       try{
          const actualId=id.id;
          const response =await this.model.deleteOne({
          "_id":actualId
       })
          return response
 
       }catch(error){
          console.log(error);
          throw error
       }
     }
 
     async findByName(text)
     {
         try {
              const hashtag = await this.model.find({
                 text:text
              });
              return hashtag;
         }
         catch(error) {
             console.log(error);
             throw error;
         }
     }
 
     async bulkCreate (data) {
       try{
            const tags = await this.model.insertMany(data);
            return tags;
       }
       catch(error) {
           console.log(error);
           throw error;
       }
   }
 
 }
module.exports =
CrudRepository
