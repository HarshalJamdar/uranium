const express = require('express');
const logger = require('./logger')

const router = express.Router();



//problem 1:
router.get('/movies', function(req, res) {
    
    res.send(["PK","Taree Zamee Par","KKKG","DDLJ"])
});



// //problem 2:
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


// //problem 4:
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
    function getFilmId(){
       for(let i=0;i<x.length;i++){
       if(req.params.filmId==x[i].id && x[i]!==undefined){
         var q=   x[i]
        } else if(req.params.filmId>x.length){
           q= "No movie exists with this given id"
        
        }
    
       }
      return q
     } 
     res.send(getFilmId())  
});

//--------------------------------------------------------------------//


// PRITESH SIR CLASS

// router.get('/array', function(req, res) {
//   let array1=[1,2,3,4,5,6,7,8,9]
//   function getAddition(){
//     let sum=0
//   for (let i = 0; i < array1.length; i++) {
//     sum += array1[i];
//   }
//   return sum
// }
// res.send(getAddition())
// });




// app.get("/sol1", function (req, res) {
//   //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//   let arr= [1,2,3,5,6,7]

//   let total = 0;
//   for (var i in arr) {
//       total += arr[i];
//   }

//   let lastDigit= arr.pop()
//   let consecutiveSum= lastDigit * (lastDigit+1) / 2
//   let missingNumber= consecutiveSum - total

//   res.send(  { data: missingNumber  }  );
// });



// app.get("/sol2", function (req, res) {
//   //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//   let arr= [33, 34, 35, 37, 38]
//   let len= arr.length

//   let total = 0;
//   for (var i in arr) {
//       total += arr[i];
//   }

//   let firstDigit= arr[0]
//   let lastDigit= arr.pop()
//   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
//   let missingNumber= consecutiveSum - total
 
//   res.send(  { data: missingNumber  }  );
// });

module.exports = router;
// adding this comment for no reason