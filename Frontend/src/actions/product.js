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

export const sellElectronics = (img,title,desc,catId,date,price) => async (dispatch) => {
    try {
        dispatch({
            type: "SellElectronicsRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("img", img);
        bodyFormData.append("title", title);
        bodyFormData.append("description", desc);
        bodyFormData.append("category", catId);
        bodyFormData.append("date_of_purchase", date);
        bodyFormData.append("price", price);

        const { data } = await axios.post("/api/add-product/",bodyFormData,{
            headers: { "Content-Type": "multipart/form-data" },
            }
        );

        dispatch({
            type: "SellElectronicsSuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "SellElectronicsFailure",
        payload: error.response.data,
      });
    }
  };

  export const sellProperty = (img,title,desc,catId,date,price) => async (dispatch) => {
    try {
        dispatch({
            type: "SellPropertyRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("img", img);
        bodyFormData.append("title", title);
        bodyFormData.append("description", desc);
        bodyFormData.append("category", catId);
        bodyFormData.append("date_of_purchase", date);
        bodyFormData.append("price", price);

        const { data } = await axios.post("/api/add-product/",bodyFormData,{
            headers: { "Content-Type": "multipart/form-data" },
            }
        );

        dispatch({
            type: "SellPropertySuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "SellPropertyFailure",
        payload: error.response.data,
      });
    }
  };

  export const sellFurniture = (img,title,desc,catId,date,price) => async (dispatch) => {
    try {
        dispatch({
            type: "SellFurnitureRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("img", img);
        bodyFormData.append("title", title);
        bodyFormData.append("description", desc);
        bodyFormData.append("category", catId);
        bodyFormData.append("date_of_purchase", date);
        bodyFormData.append("price", price);

        const { data } = await axios.post("/api/add-product/",bodyFormData,{
            headers: { "Content-Type": "multipart/form-data" },
            }
        );

        dispatch({
            type: "SellFurnitureSuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "SellFurnitureFailure",
        payload: error.response.data,
      });
    }
  };

  export const sellVehicle = (img,title,desc,catId,date,price) => async (dispatch) => {
    try {
        dispatch({
            type: "SellVehicleRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("img", img);
        bodyFormData.append("title", title);
        bodyFormData.append("description", desc);
        bodyFormData.append("category", catId);
        bodyFormData.append("date_of_purchase", date);
        bodyFormData.append("price", price);

        const { data } = await axios.post("/api/add-product/",bodyFormData,{
            headers: { "Content-Type": "multipart/form-data" },
            }
        );

        dispatch({
            type: "SellVehicleSuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "SellVehicleFailure",
        payload: error.response.data,
      });
    }
  };
