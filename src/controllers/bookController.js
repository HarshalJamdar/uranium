const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

       const createBook= async function (req, res) {
       let data= req.body
       let savedData= await BookModel.create(data)
       res.send({msg: savedData})
   }



   const createAuthorData= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}



const bookList= async function (req, res) {
  const authorDetails= await AuthorModel.find({author_name : "Chetan Bhagat"});
  const id= authorDetails[0].author_id;
  const bookName= await BookModel.find({author_id : id}).select({bookName:1, _id: 0})
  res.send({msg: bookName})
}



const updateBooks= async function (req, res) {
  const bookUpdate= await BookModel.findOneAndUpdate(
    {bookName : "Two states"},
    {price : 100},
    {new : true}
    ).select({price:1,_id:0})

  const bookUpdates= await BookModel.find(
      {bookName : "Two states"})
  const id= bookUpdates[0].author_id;
  const authorName= await AuthorModel.findOne({author_id : id}).select({author_name:1, _id: 0})  

       res.send( { msg: authorName,bookUpdate})
  }



  const costRange= async function (req, res) {
  const books= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1}) //this return array of object which includes author_id. But we want array of author_id.
  let authorId = books.map(element=>element.author_id)
  
  let array=[]; //array of array of object [[{}],[{}]]
  for(i=0;i<authorId.length;i++){
    let id= authorId[i];
    const authorN= await AuthorModel.find({author_id : id}).select({author_name:1, _id: 0})// return array of object
    array.push(authorN) 
  }
  let authorName = array.flat()// so that array inside array will concatinate and only get array of object. [{},{}]
  res.send( { msg: authorName})
  }



module.exports.createBook= createBook
module.exports.createAuthorData= createAuthorData
module.exports.bookList= bookList
module.exports.updateBooks= updateBooks
module.exports.costRange= costRange



// const createBook= async function (req, res) {
//     let data= req.body
//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }



// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
