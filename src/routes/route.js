const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", authorController.createPublisher  )

router.post("/createBook", bookController.createBook  )


router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.put("/books", bookController.bookUpdate)
module.exports = router;









// WHAT IS PUT and POST IN API?
// POST means "create new" as in "Here is the input for creating a user, create it for me". PUT means "insert, replace if already exists" as in "Here is the data for user 5". You POST to example.com/users since you don't know the URL of the user yet, you want the server to create it.