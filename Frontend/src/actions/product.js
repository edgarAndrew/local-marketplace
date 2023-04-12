import axios from "axios"
import '../axios'

export const getProduct = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"ProductDetailsRequest"
        })
        const {data} = await axios.get(`/api/single-products/${id}`)
        dispatch({
            type:"ProductDetailsSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"ProductDetailsFailure",
            payload:error.response.data
        })
    }    
}
