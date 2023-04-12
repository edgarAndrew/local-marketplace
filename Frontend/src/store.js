import {configureStore} from "@reduxjs/toolkit"
import {userReducer} from './reducers/user'
import {homeReducer} from './reducers/home'
import {productReducer} from './reducers/product'

const store = configureStore({
    reducer:{
        user:userReducer,
        home:homeReducer,
        product:productReducer
    }
})
export default store