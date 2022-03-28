const mongoose = require("mongoose")

const todoSchema  = new mongoose.Schema({
    title :{type:String , required: true},
   
    createdAt :{type:Date , require:true ,default:Date.now},
    updatedAt :{type:Date , require:true ,default:Date.now}
},{
    versionKey:false ,
    timestamps: true,
})

module.exports = mongoose.model("post", todoSchema)