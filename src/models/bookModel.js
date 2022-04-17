





const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author: {
        type: ObjectId,
        ref: "newAuthor",
        require: true
    },
    isHardCover:{
        type:Boolean,
        default: false
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "newPublisher",
        require: true
    },

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
