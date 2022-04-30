import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';





const store= configureStore({
    reducer:rootReducer,
    composeWithDevTools:composeWithDevTools(applyMiddleware(thunk)) 
})

export default store;