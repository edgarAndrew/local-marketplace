import axios from "axios"
import '../axios'

export const getCategories = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"CategoriesRequest"
        })
        const {data} = await axios.get("/api/get-categories/")
        dispatch({
            type:"CategoriesSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"CategoriesFailure",
            payload:error.response.data
        })
    }    
}