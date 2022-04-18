const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})
}

const getscholarship= async function (req, res) {
    let candidate = await developerModel.find( {percentage  : {$gte : 70}} )
    let eligible=[]
    for(let i=0;i<candidate.length;i++){
        if(candidate[i].gender==="female"){
            eligible.push(candidate[i])
        }
    }
      res.send({data:eligible })
}




const getDeveloperWithQuery = async function (req, res) {
    const getPer= req.query.percentage
    const getPro = req.query.program
    const program1 = await batchModel.find({ program : getPro}).select({_id : 1})
    const dev = await developerModel.find({percentage: {$gte: getPer}, batch:{$in: program1}}).populate("batch")
    res.send({msg: dev})
}



const test = async function (req, res) {
    const developer = await developerModel.find().populate("batch");
    res.send({ data: developer });
  }


module.exports.createDeveloper= createDeveloper
module.exports.getscholarship= getscholarship
module.exports.getDeveloperWithQuery = getDeveloperWithQuery
module.exports.test= test








// const getDeveloperWithQuery = async function (req, res) {
//     let specificDeveloper = await developerModel.find().populate('author_id')
//     res.send({data: specificBook})

// }