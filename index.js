const express  = require("express")
const app = express()
app.use(express.json())

const usercontroller = require("./controller/usercontroller")
const todocontroller = require("./controller/todocontroller")


app.use("/user",usercontroller)
app.use("/todo",todocontroller)


module.exports= app;