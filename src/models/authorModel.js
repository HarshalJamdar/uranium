


const mongoose = require('mongoose');


const autherSchema = new mongoose.Schema( {
    author_id:{
       type: Number,
       require: true
      },
    author_name:{
    type: String,
    require: true
   },
   age:Number,
   address:String
}, { timestamps: true });


module.exports = mongoose.model('AuthorData02', autherSchema)