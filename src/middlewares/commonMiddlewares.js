
const ObjectId = require('mongoose').Types.ObjectId;

const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")






const free= function ( req, res, next) {
    let freeUser= req.headers["isfreeappuser"]
    if(!freeUser){
     res.send({msg:"The request is missing a mandatory header!"})
    }else{
        next()
    }
}


const objectId= async function (req,res,next){
    let user=req.body
    let id=user.userId
    let id1=user.productId

    if(ObjectId.isValid(user.userId)===false){ 
        res.send({msg: "Please enter valid User id!"})
    }else {
        let validation= await UserModel.find({_id:id})
        console.log(validation.length)
    
        if(validation.length===0){
        res.send({msg: "User is not present!"})
    }else if((ObjectId.isValid(user.productId)===false)){
        res.send({msg: "Please enter valid Product id!"})
    }else{
        let validation1= await ProductModel.find({_id:id1})
        console.log(validation1.length)
    
        if(validation1.length===0){
        res.send({msg: "Product is not available!"})
    }else{
        next()
    }
  }
 }
}


const attribute= function ( req, res, next) {
    let freeUser= req.headers["isfreeappuser"]
    let attr=req.body.isFreeAppUser
    attr=freeUser
        next()
}


module.exports.free= free
module.exports.objectId= objectId
module.exports.attribute= attribute
// module.exports.mid4= mid4
