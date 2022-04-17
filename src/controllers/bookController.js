const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")
const ObjectId = require('mongoose').Types.ObjectId;

    
   

const createBook= async function(req,res){
    let book=req.body
    let id=book.author
    let id1=book.publisher
    

    if(ObjectId.isValid(book.author)===false){ 
        res.send({msg: "Please enter valid Author id!"})
    }else {
        let validation= await authorModel.find({_id:id})
        console.log(validation.length)
    
        if(validation.length===0){
        res.send({msg: "Author is not present!"})
    }else if((ObjectId.isValid(book.publisher)===false)){
        res.send({msg: "Please enter valid Publisher id!"})
    }else{
        let validation1= await PublisherModel.find({_id:id1})
        console.log(validation1.length)
    
        if(validation1.length===0){
        res.send({msg: "Publisher is not present!"})
    }else{
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})}
    }
  }
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}



const bookUpdate= async function(req,res){
    const bookUpdates= await bookModel.updateMany(
        {publisher :{$in:[ "6259411eacd61993b184cc6f",  "625bbaff67050852fa742969"]}},
        {isHardCover  : true},
        {new : true}
        ).select({isHardCover :1,_id:0})


     const authorRating = await authorModel.find({rating: {$gt : 3.5}}).select({_id:1})
     let authorId =authorRating.map(element=>element._id)
     console.log(authorId)

     let array=[]
     for(i=0;i<authorId.length;i++){
      const newPrice = await bookModel.updateMany(
          {author : authorId[i]},
          {$inc:{"price" : 10}},
          {new : true}
      )
     array.push(newPrice)
      }
      res.send( { msg: bookUpdates, array})  
}

module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.bookUpdate = bookUpdate




// const priceUpdate = await bookModel.updateMany(
//     {author : authorId[i]},
//     {$inc:{"price" : 10}},
//     {new : true}
// ).select({price :1 ,_id:0})

// }


// const createBook= async function (req, res) {
//     let book = req.body
//     if(book.author!=undefine){
//         if(ObjectId.isValid(book.author)==true){
//             if( book.publisher!=undefined &&  ObjectId.isValid(book.
//             publisher)==true){
            
//            let bookCreated = await bookModel.create(book)
//            res.send({data: bookCreated})
//            }else{ res.send({msg: "Please enter valid Publisher id!"})}
       
//         }else{
//         res.send({msg: "Author is not present!"})
//             }
//     }else{
//             res.send({msg: "Please enter valid Author id!"})
//         }   
           
    


        // async function authorValid(id){

        //    if(ObjectId.isValid(book.author)==true){
        //        let id=book.author
        //        let validation= await authorModel.find({_id:id})
        //        console.log(validation)
        //           return true 
        //     }else{
        //           return false
        //          }

        // }
        
//  }





// const createBook= async function(req,res){
//     let book=req.body
//     let id=book.author
//     let id1=book.publisher
    

//     if(ObjectId.isValid(book.author)===false){ 
//         res.send({msg: "Please enter valid Author id!"})
//     }else {
//         let validation= await authorModel.find({_id:id})
//         console.log(validation.length)
    
//         if(validation.length===0){
//         res.send({msg: "Author is not present!"})
//     }else if(book.publisher==""){
//         res.send({msg: "Please enter valid Publisher id!"})
//     }else if((ObjectId.isValid(book.publisher)===false)){
//         res.send({msg: "Publisher is not present!"})
//     }else{
//         let validation1= await PublisherModel.find({_id:id1})
//         console.log(validation1.length)
    
//         if(validation1.length===0){
//         res.send({msg: "Publisher is not present!"})
//     }else{
//         let bookCreated = await bookModel.create(book)
//         res.send({data: bookCreated})}
//     }
//   }
// }




// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }