import express from 'express';
import {getPosts,createPost,updatePost,deletePost} from '../controller/posts.js';

const router = express.Router()

router.get('/' , getPosts)
router.post('/' , createPost)
//Sending Params to server, ":" says that watever comes after ":" its param, but in axios its should be localhost:5000/posts/56703idsb
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router
