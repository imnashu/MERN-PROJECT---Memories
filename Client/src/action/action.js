import * as api from '../api/api.js'

/* 
   
     By default action return a plain object { type : "FETCH" , payload : data} ,
     but we need some function to get dispatched like below 

     dispatch({
               type: "FetchAll",
               payload: res.data
          })

    instead of a plain object {} because we are making asyncronous call to fetch the data.

    Now in order to make this functionality work, we make use of thunk module, which helps us to return function.

    const store = createStore(rootReducers,compose(applyMiddleware(thunk))) // this is how we create store

    the function getPosts is known as action creators
 
*/

export const getPosts = () => async (dispatch) => {
     try {
          const res = await api.fetchData()
          dispatch({
               type: "FetchAll",
               payload: res.data
          })
     }
     catch (e) {
          console.log(e.message)
     }
}

export const createPosts = (postData) => async (dispatch) => {
     try {
          const res = await api.createData(postData)
          dispatch({
               type: "CreatePost",
               payload: res.data
          })
     }
     catch (e) {
          console.log(e.message)
     }
}


export const updatePosts = (currentId, postData) => async (dispatch) => {
     try {
          const res = await api.updateData(currentId, postData)
          console.log(res.data)
          dispatch({
               type: "updatePost",
               payload: res.data,
               payload_id: currentId
          })
     }
     catch (e) {
          console.log(e)
     }
}

export const deletePosts = (currentId) => async (dispatch) => {
     try {
          console.log(currentId)
          await api.deleteData(currentId)
          dispatch({
               type: "deletePost",
               payload_id: currentId
          })
     }
     catch (e) {
          console.log(e.message)
     }
}