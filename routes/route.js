const express = require("express")
const route = express.Router()

const fileController = require("../controller/fileController")
const userController = require("../controller/userController")

route.post("/uploadFile",fileController.upload)


module.exports = route
