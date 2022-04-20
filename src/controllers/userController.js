const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }



const basicCode = async function(req,res){
res.send({msg: "Everything working properly. Assignment is done."})
}



//----------both middleware will work as next()function is given-----------//
const basicCode1 = async function(req,res,next){
    res.send({msg: "Everything working properly. Assignment is done1."})
    next()
    }

module.exports.basicCode= basicCode
module.exports.basicCode1= basicCode1
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData