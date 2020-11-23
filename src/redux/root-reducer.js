// manages all the reducers for the App
// instead of having one large reducer files, 
// they are split amoungst component and reducer combines them

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';


export default combineReducers({
    user: userReducer
})