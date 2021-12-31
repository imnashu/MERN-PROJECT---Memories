import react from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import {Provider} from 'react-redux';
import store from '../src/Store/Store.js'

//Store is created and We are providing it to App using <Provider> component

/* 

    How to access the data from the store?
        This can be done using useSelector.
        const posts = useSelector((state) => state.posts)
        const newPost = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null) # you can also customise what to return
        Here state.posts is coming from the word that is defined in the combination of all the reduces, it maps to that keyword i.e state.keyword

    How to trigger any of the action? 
        const dispatch = useDispatch()
        dispatch(updatePosts(currentId, PostData))

*/

ReactDOM.render(
<Provider store={store}>  
<App/>
</Provider>
,document.getElementById('root'))