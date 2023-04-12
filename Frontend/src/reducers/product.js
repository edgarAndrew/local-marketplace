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

    SellElectronicsRequest:(state,action)=>{
        state.loading = true
    },
    SellElectronicsSuccess:(state,action)=>{
        state.message = action.payload
        state.loading = false        
    },
    SellElectronicsFailure:(state,action)=>{
        state.error = action.payload
        state.loading = false 
    },

    SellPropertyRequest:(state,action)=>{
        state.loading = true
    },
    SellPropertySuccess:(state,action)=>{
        state.message = action.payload
        state.loading = false        
    },
    SellPropertyFailure:(state,action)=>{
        state.error = action.payload
        state.loading = false 
    },

    SellFurnitureRequest:(state,action)=>{
        state.loading = true
    },
    SellFurnitureSuccess:(state,action)=>{
        state.message = action.payload
        state.loading = false        
    },
    SellFurnitureFailure:(state,action)=>{
        state.error = action.payload
        state.loading = false 
    },

    SellVehicleRequest:(state,action)=>{
        state.loading = true
    },
    SellVehicleSuccess:(state,action)=>{
        state.message = action.payload
        state.loading = false        
    },
    SellVehicleFailure:(state,action)=>{
        state.error = action.payload
        state.loading = false 
    },


    clearErrors:(state,action)=>{
        state.error = null
        state.message = null
    }
})
