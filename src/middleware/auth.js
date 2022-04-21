var app = require("express")();
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const mid1= async function(req,res,next){
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token);


  let decodedToken = jwt.verify(token, "functionup-uranium",
 async function(err, decoded) {
    // err
    console.log(err)
    // decoded undefined
    console.log(decoded)
    if (!decoded){
        return res.send({ status: false, msg: "token is invalid" });
      }else if(err==null) {
               next()
            }
     }
  );   
}
module.exports.mid1 = mid1