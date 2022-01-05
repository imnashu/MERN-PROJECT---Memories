import axios from 'axios';
const url = 'http://127.0.0.1:5000/posts'

//We will send all the request to the server through axios 
export const fetchData = () => axios.get(url)

//axios request for creating new post in the db 
export const createData = (postData) => axios.post(url, postData)

//axios request for updating the db using id
export const updateData = (currentId, postData) => axios.patch(`${url}/${currentId}`, postData)

export const deleteData = (currentId) => axios.delete(`${url}/${currentId}`)
