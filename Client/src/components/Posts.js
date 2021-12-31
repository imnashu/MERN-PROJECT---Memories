import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deletePosts, getPosts } from '../action/action'

export default function Posts({ currentId, setcurrentId }) {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    //Once the post was getting deleted, we need to explicity refresh the page  in order to make sure post is getting deleted.
    // So if we set useEffect on posts, so whenever we deleted a post dispatch(getPosts()) gets called and fresh posts gets loaded.
    useEffect(() => {
        dispatch(getPosts())
    }, [posts])

    return (
        <>
            <div className='posts'>
                {
                    posts.length !== 0 ?
                        posts.map((post) => {
                            return (
                                <div className="card card-main" key={post._id}>
                                    <img src={post.selectedFile} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.message}</p>
                                        <p className="card-text">{post.creator}</p>
                                        <a href="#" className="btn btn-primary" onClick={() => { setcurrentId(post._id) }}>Edit</a>
                                        <br />
                                        <br />
                                        <a href="#" className="btn btn-danger" onClick={() => { dispatch(deletePosts(post._id)) }}>Delete</a>
                                    </div>
                                </div>
                            )
                        }) : <h1>Loading....</h1>
                }
            </div>
        </>
    )
}
