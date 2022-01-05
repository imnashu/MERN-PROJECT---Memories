import React from 'react'
import './Form.css'
import { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPosts, updatePosts } from '../action/action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

export default function Form({ currentId, setcurrentId }) {
    const [PostData, setPostData] = useState({
        title: '', message: '', creator: '', tags: '', selectedFile: ''
    })
    const dispatch = useDispatch()
    const newPost = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

    /*Every time currentId is getting changed, newPost gets updated, 
    so we have set a useEffect for newPost and called setPostData to set the form with the values what we click*/
    useEffect(() => {
        if (newPost) {
            setPostData(newPost)
        }
    }, [newPost])


    //Once form is submitted, we either add a new post or update a new post
    const handleData = (e) => {
        e.preventDefault()
        if (currentId) {
            //We are updating the post with watevr new data we have entered
            dispatch(updatePosts(currentId, PostData))
        } else {
            //Else create a new post and save it to database.
            dispatch(createPosts(PostData))
        }

        //Once you Update or Create a post we clear the form
        Clear();

    }

    const Clear = (e) => {
        //We set currentId to null becz to reset it, if its not null it will not get updated on clicking the new post
        setcurrentId(null)
        setPostData({
            title: '', message: '', creator: '', tags: '', selectedFile: ''
        })
    }

    return (
        <div className='form'>
            <h3>Add a new Memory</h3>
            <form action="submit" onSubmit={handleData}>
                <textarea type='text' placeholder='Enter title to memory' name='title' id='titleid' className='commontext1' value={PostData.title} onChange={(e) => setPostData({ ...PostData, title: e.target.value })} />
                <textarea placeholder='Enter the description to memory' name='message' id='messageid' value={PostData.message} onChange={(e) => setPostData({ ...PostData, message: e.target.value })} />
                <textarea type='text' placeholder='Enter creator name' name='creator' value={PostData.creator} onChange={(e) => setPostData({ ...PostData, creator: e.target.value })} />
                <textarea type='text' placeholder='Enter tags' name='tags' value={PostData.tags} onChange={(e) => setPostData({ ...PostData, tags: e.target.value })} />
                <div>
                    <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...PostData, selectedFile: base64 })} />
                </div>
                <button type="submit" className='btn btn-danger'>Submit</button>
            </form>
            <button className='btn btn-success' onClick={() => Clear()}>Clear</button>
        </div>
    )
}
