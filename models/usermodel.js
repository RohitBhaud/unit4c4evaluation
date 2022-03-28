// User Model

// firstName ( String, required)
// lastName ( String, optional)
// email ( String, required)
// password ( String, required)
// createdAt
// updatedAt
const mongoose = require("mongoose")

const userSchema  = new mongoose.Schema({
    firstName :{type:String , required: true},
    lastName :{type:String , required: false},
    email :{type:String , required: true},
    password :{type:String , required: true},
    createdAt :{type:Date , require:true ,default:Date.now},
    updatedAt :{type:Date , require:true ,default:Date.now}
},{
    versionKey:false ,
    timestamps: true,
})

module.exports = mongoose.model("user", userSchema)