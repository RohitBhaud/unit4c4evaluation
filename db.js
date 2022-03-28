const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://rohit:rohit@cluster0.vm5rc.mongodb.net/c4data?retryWrites=true&w=majority")
}

module.exports = connect