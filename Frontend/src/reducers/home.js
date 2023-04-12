import {createReducer} from "@reduxjs/toolkit"

const initialState = {}
export const homeReducer = createReducer(initialState,{
    
    // dispatch types or cases for reducer
    CategoriesRequest: (state,action)=>{
        state.loading = true;
    },
    CategoriesSuccess: (state,action)=>{
        state.loading = false;
        state.categories = action.payload;
        state.isAuthenticated = true;
    },
    CategoriesFailure: (state,action)=>{
          state.loading = false;     
          state.error = action.payload
    },
    ProductsRequest: (state,action)=>{
        state.loading = true;
    },
    ProductsSuccess: (state,action)=>{
        state.loading = false;
        state.products = action.payload;
    },
    ProductsFailure: (state,action)=>{
          state.loading = false;     
          state.error = action.payload
    },
    clearErrors:(state,action)=>{
        state.error = null
        state.message = null
    }
})
