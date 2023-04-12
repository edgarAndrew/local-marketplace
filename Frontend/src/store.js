import {configureStore} from "@reduxjs/toolkit"
import {userReducer} from './reducers/user'
import {homeReducer} from './reducers/home'

const store = configureStore({
    reducer:{
        user:userReducer,
        home:homeReducer
    }
})
export default store