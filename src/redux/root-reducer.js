// manages all the reducers for the App
// instead of having one large reducer files, 
// they are split amoungst component and reducer combines them

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// implements window.localStorage
import storage from 'redux-persist/lib/storage';


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'] //what reducer(s) to store
}

// before redux-persist
// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);