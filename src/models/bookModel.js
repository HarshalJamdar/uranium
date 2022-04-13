const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        requred : true
     },

    authorName: String, 

    year : {
        type : Number,
        default : 2021
    },

    tags : [],

    isPublished: Boolean,

    prices: {
        type:String,
        indianPrice: String,
        europePrice: String,
    },

    stoksAvailable: Boolean,

    totalPages : Number

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema) //newbooks

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
