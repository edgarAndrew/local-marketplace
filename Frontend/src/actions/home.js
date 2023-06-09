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
export const getProducts = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"ProductsRequest"
        })
        const {data} = await axios.get("/api/get-products/")
        dispatch({
            type:"ProductsSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"ProductsFailure",
            payload:error.response.data
        })
    }    
}
export const filter = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"FilterRequest"
        })
        const {data} = await axios.get(`/api/get-products/?category_filter=${id}`)
        dispatch({
            type:"FilterSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"FilterFailure",
            payload:error.response.data
        })
    }    
}