const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerController= require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/batches", batchController.createBatch )

 router.post("/developers", developerController.createDeveloper  )

 router.get("/scholarship-developers", developerController.getscholarship)

 router.get("/developers", developerController.getDeveloperWithQuery)

 router.get("/getDevelopers", developerController.test)

module.exports = router;