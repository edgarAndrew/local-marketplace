import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

export const newsletterReducer = createReducer(initialState,{
    SendNewsletterRequest:(state,action)=>{
        state.loading = true
    },
    SendNewsletterSuccess:(state,action)=>{
        state.message = action.payload;
        state.loading = false
    },
})