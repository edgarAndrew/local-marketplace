import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated:false,
    profile:null
}
export const userReducer = createReducer(initialState,{
    
    // dispatch types or cases for reducer
    ProfileRequest: (state,action)=>{
        state.loading = true;
    },
    ProfileSuccess: (state,action)=>{
        state.loading = false;
        state.profile = action.payload;
    },
    ProfileFailure: (state,action)=>{
          state.loading = false;     
          state.error = action.payload
    },

    LoginRequest: (state,action)=>{
        state.loading = true;
    },
    LoginSuccess: (state,action)=>{
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = true;
    },
    LoginFailure: (state,action)=>{
          state.loading = false;     
          state.error = action.payload
          state.isAuthenticated = false;
    },

    RegisterRequest: (state,action)=>{
        state.loading = true;
    },
    RegisterSuccess: (state,action)=>{
        state.loading = false
        state.message = action.payload
        state.isAuthenticated = true;
    },
    RegisterFailure: (state,action)=>{
        state.loading = false;     
        state.error = action.payload
        state.isAuthenticated = false;
    },
    GoogleLoginRequest: (state,action)=>{
        state.loading = true
    },
    GoogleLoginSuccess: (state,action)=>{
        state.profile = action.payload
        state.isAuthenticated = true
        state.loading = false  
    },
    GoogleLoginFailure: (state,action)=>{
        state.profile = action.payload
        state.isAuthenticated = false
        state.loading = false  
    },
    LoadUserRequest: (state,action)=>{
        state.loading = true;
    },
    LoadUserSuccess: (state,action)=>{
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true;
    },
    LoadUserFailure: (state,action)=>{
        state.loading = false;     
        state.error = action.payload
        state.isAuthenticated = false;
    },
    ForgotPassRequest: (state,action)=>{
        state.loading = true;
    },
    ForgotPassSuccess: (state,action)=>{
        state.loading = false
        state.message = action.payload
        state.isAuthenticated = true;
    },
    ForgotPassFailure: (state,action)=>{
        state.loading = false;     
        state.error = action.payload
        state.isAuthenticated = true;
    },
    LogoutUserRequest: (state,action)=>{
        state.loading = true;
    },
    LogoutUserSuccess: (state,action)=>{
        state.loading = false
        state.message = action.payload
        state.isAuthenticated = false;
    },
    LogoutUserFailure: (state,action)=>{
        state.loading = false;     
        state.error = action.payload
        state.isAuthenticated = true;
    },
    clearErrors:(state,action)=>{
        state.error = null
        state.message = null
    }
})
