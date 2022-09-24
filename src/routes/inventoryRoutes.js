const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
  res.send("INVENTORY")
})

router.route("/add").post(function (req, res) {

})

module.exports = router 
