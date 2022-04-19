const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--------Global Middleware------------//
const midGlb= function (req,res,next){
    console.log("Hi I am global middleware!")
    console.log(moment().format())
    console.log(req.ip)
    console.log(req.path)
    next()
}

app.use(midGlb)
app.use( '/',route)
//------------------------------------//

//--------router middleware------------//

// app.use('/', route);

//-------------------------------------//

mongoose.connect("mongodb+srv://HarshalJamdar:810Umakant@cluster0.wz2ii.mongodb.net/DataBase1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
