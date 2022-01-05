import postMessages from "../models/postMessage.js"
import mongoose from "mongoose"
export const getPosts = async (req, res) => {
    try {
        const data = await postMessages.find()
        res.status(200).json(data)
    }
    catch (e) {
        res.status(404).json(e)
    }
}

export const createPost = async (req, res) => {
    const data = req.body
    const newpost = new postMessages(data)
    try {
        await newpost.save();
        res.status(201).json(newpost)
    } catch (e) {
        res.status(405).json({ 'message': e.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Invalid id")
        const updatedpost = await postMessages.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
        res.json(updatedpost)
    } catch (e) {
        res.status(404).json({ 'message': e.message })
    }
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params
    try {
        await postMessages.findByIdAndRemove(_id)
        res.status(201).json({ "message": "deleted-succesfully" })
    } catch (e) {
        res.status(405).json({ 'message': e.message })
    }
}