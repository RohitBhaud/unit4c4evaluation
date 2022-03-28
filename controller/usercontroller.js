const express = require("express")
const router = express.Router()
const User = require("../models/usermodel")

router.get("/" ,async(req,res)=>{
    try {
        const user = await User.find().lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(200).send(error.message)
    }
})

router.post("/" ,async(req,res)=>{
    try {
        const post = await post.create(req.body)
        return res.status(200).send(post)
    } catch (error) {
        return res.status(200).send(error.message)
    }
})
