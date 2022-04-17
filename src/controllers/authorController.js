


const AuthorModel= require("../models/authorModel")

const PublisherModel= require("../models/publisherModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}


const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}
module.exports.createAuthor = createAuthor

module.exports.createPublisher = createPublisher

















// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }


// module.exports.getAuthorsData= getAuthorsData



