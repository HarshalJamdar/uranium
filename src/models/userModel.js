const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        require: true
    },
    authorName: String,
    category:{
       type: String,
       enum: ["Fiction","Non-Fiction","Adventure","Horror","Science-Fiction","Fantacy","Historical"]
    },
    year: Number
   
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



