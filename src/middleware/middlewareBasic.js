
const moment = require('moment');
var app = require("express")();


const mid1= function(req,res,next){
    console.log("Hi, I am Route Middleware!")
    console.log(moment().format())
    next()
}


const mid2= function(req,res,next){
    console.log(req.ip)
    next()
}



const mid3= function(req,res,next){
    console.log(req.path)
    next()
}


module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3