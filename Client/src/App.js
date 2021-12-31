import React from 'react'
import Form from './components/Form'
import Posts from './components/Posts'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts } from './action/action'
import { useState } from 'react'
import './App.css'
import nav from './2650149.jpg'

export default function App() {
    const dispatch = useDispatch()

    /* 
        EDIT
        For editing we need the data of the post we clicked to reflect on the form.
        But Post and form are 2 different components we need to pass the id from post to form.
        Only one common connection from these 2 is App component.
        So we create a currentId variable using usestate and pass this and its settermethod to the postcomponent
        On clicking EDIT we set the currentId, based on if currentId is null or not we fill the content of form
        If  currentId is not null then first we fetch that post from store using useSelector and set the form data.

        DELETE
        For deleting we directly dispatch the action by passing id to delete it

    
    */
    const [currentId, setcurrentId] = useState(null)
   
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId,dispatch])
    
     return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={nav} alt="" width="80" height="80" />
                    </a>
                    <h1>Memories</h1>
                </div>
            </nav>
        
            <div className='main'>
                <Posts currentId ={currentId} setcurrentId={setcurrentId}/>
                <Form currentId ={currentId} setcurrentId={setcurrentId}/>
            </div>
        </>
    )
}
