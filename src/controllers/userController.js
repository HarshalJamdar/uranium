const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");





const createUser = async function (abc, pqr) {
  let data = abc.body;
  let savedData = await userModel.create(data);
  pqr.send({ msg: savedData });
};



const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is incorerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      organisation: "FUnctionUp",
    },
    "functionup-uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};



const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};



const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userId1= req.params.userId;
  let newAge = req.body.age;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId1 }, 
      {$set:{age : newAge}}
    );
  res.send({ status: true, data: updatedUser });
};





let deleteUser = async function(req, res){

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userData }, 
    {$set : {isDeleted : true}},
    { new: true }
  );

  res.send({ status:true, data: updatedUser });
};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;