import axios from "axios"
import '../axios'

export const login = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoginRequest"
        })
        localStorage.removeItem("user");
        
        const {data} = await axios.post("/api/login/",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"LoginSuccess",
            payload:data.message
        })
        localStorage.setItem(
            'user',
            JSON.stringify({token: data.token })
        )
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"LoginFailure",
            payload:error.response.data
        })
    }    
}
export const register = (name, email, password, profile_pic, phone) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("name", name);
        bodyFormData.append("email", email);
        bodyFormData.append("password", password);
        bodyFormData.append("profile_pic", profile_pic);
        bodyFormData.append("phone", phone);

        const { data } = await axios.post("/api/signup/",bodyFormData,{
            headers: { "Content-Type": "multipart/form-data" },
            }
        );

        dispatch({
            type: "RegisterSuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data,
      });
    }
  };
export const googleLogin = (tokenId,profile)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GoogleLoginRequest"
        })
        localStorage.removeItem("user");
        
        const {data} = await axios.post(`/api/google-auth/`,{token_id:tokenId},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"GoogleLoginSuccess",
            payload:profile
        })
        localStorage.setItem(
            'user',
            JSON.stringify({token: data.token })
        )
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GoogleLoginFailure",
            payload:error.response.data
        })
    }    
}
export const loadSeller = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoadUserRequest"
        })
        await axios.get("/api/verify-jwt/")
        dispatch({
            type:"LoadUserSuccess",
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"LoadUserFailure",
            payload:error.response.data.detail
        })
    }    
}
export const logout = ()=>async(dispatch)=>{
    dispatch({
        type:"LogoutUserRequest"
    })
    localStorage.removeItem("user"); 
    dispatch({
        type:"LogoutUserSuccess",
        payload:"User Logged Out"
    })
}