const express = require("express")
const router = express.Router()
const Todo = require("../models/todomodel")

router.get("/" ,async(req,res)=>{
    try {
        const todo = await Todo.find().lean().exec()
        return res.status(200).send(todo)
    } catch (error) {
        return res.status(200).send(error.message)
    }
})

router.post("/" ,async(req,res)=>{
    try {
        const create = await create.create(req.body)
        return res.status(201).send(create)
    } catch (error) {
        return res.status(201).send(error.message)
    }
})

router.get("/:id" ,async(req,res)=>{
    try {
        const user = await Todo.findById(req.params.id).lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

router.patch("/:id" ,async(req,res)=>{
    try {
        const user = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status().send(user)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

router.delete("/:id" ,async(req,res)=>{
    try {
        const user = await Todo.findByIdAndDelete(req.params.id,req.body).lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
