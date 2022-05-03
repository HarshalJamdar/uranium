const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorControllers")
const blogController = require("../controllers/blogControllers")
const middleWare = require("../middlewares/commonMiddleware")


//--create account
router.post("/authors",authorController.createAuthor)

//--login
router.post("/login", authorController.loginAuthor)

//--creating blog
router.post("/blogs",middleWare.authentication,blogController.createBlog)

//--fetching blog
router.get("/blogs",middleWare.authentication,blogController.getBlog)

//--updating blog
router.put("/blogs/:blogId",middleWare.authentication,middleWare.authorisation,blogController.updateBlog)

//--deleting blog using id
router.delete("/blogs/:blogId",middleWare.authentication,middleWare.authorisation,blogController.deleteBlog)

//--deleting blog using query params(filters)
router.delete("/blogs",middleWare.authentication,middleWare.authorisation,blogController.deleteBlog1)



module.exports = router;
