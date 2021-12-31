import { createStore } from "redux";
import rootReducers from "../reducer";
import { applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

/*

For creating store, it takes root reducers as parameter(group of reducers)
Once store is created , now its available for all the components( main intention of REDUX is to make available the data to all the component, from 
    parent to child and vice-versa(which is difficult))
Refer action.js for thunk usage 

*/
const store = createStore(rootReducers, compose(applyMiddleware(thunk)))

export default store