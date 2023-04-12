import {createReducer} from "@reduxjs/toolkit"

const initialState = {}
export const productReducer = createReducer(initialState,{
    
    // dispatch types or cases for reducer
    ProductDetailsRequest:(state,action)=>{
        state.loading = true
    },
    ProductDetailsSuccess:(state,action)=>{
        state.product = action.payload
        state.loading = false        
    },
    ProductDetailsFailure:(state,action)=>{
        state.error = action.payload
        state.loading = false 
    },
    clearErrors:(state,action)=>{
        state.error = null
        state.message = null
    }
})
