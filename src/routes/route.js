const express = require('express');
const logger = require('./logger')

const router = express.Router();



//problem 1:
router.get('/movies', function(req, res) {
    
    res.send(["PK","Taree Zamee Par","KKKG","DDLJ"])
});



//problem 2:
// router.get( '/movies/:indexNumber', function (req, res) {

//    let arr= ["PK","Taree Zamee Par","KKKG","DDLJ"]
//    let a=req.params.indexNumber;
//      res.send(arr.at(a));
// });

//problem 3:
router.get( '/movies/:indexNumber', function (req, res) {
    function getMovies(){
    let arr= ["PK","Taree Zamee Par","KKKG","DDLJ"]
    let a=req.params.indexNumber;
    if(arr.length>=a){
      return arr.at(a)
    }else if(a>arr.length){
      return "Please Enter Valid Number."
    }
}
res.send(getMovies())
 });


//problem 4:
// router.get('/films',function(req,res){
// let x=[ {
//     'id': 1,
//     'name': 'The Shining'
//    }, {
//     'id': 2,
//     'name': 'Incendies'
//    }, {
//     'id': 3,
//     'name': 'Rang de Basanti'
//    }, {
//     'id': 4,
//     'name': 'Finding Nemo'
//    }]
//    res.send(x)
// });


//Problem 5:
router.get('/films/:filmId', function(req, res) {
    // function getFilmId(){
    let x=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       for(let i=0;i<x.length;i++){
    //    if(req.params.filmId==x[i].id){
    //        return x[i]
    //    }else if(req.params.filmId!==x[i].id){
    //        return "No movie exists with this id"
    //    }


     const w=(req.params.filmId==x[i].id) ? x[i] : "No movie exists with this id"
     res.send(w)
     }
     
});



module.exports = router;
// adding this comment for no reason