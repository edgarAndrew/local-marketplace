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

export const sellElectronics = (img,title,desc,catId,date,price,location,brand) => async (dispatch) => {
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
        bodyFormData.append("location", location);
        bodyFormData.append("brand", brand);

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

  export const sellProperty = (title,desc,date,catId,price,location,property,rooms,carpet,file) => async (dispatch) => {
    try {
        dispatch({
            type: "SellPropertyRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("img", file);
        bodyFormData.append("title", title);
        bodyFormData.append("description", desc);
        bodyFormData.append("category", catId);
        bodyFormData.append("date_of_purchase", date);
        bodyFormData.append("price", price);
        bodyFormData.append("location", location);
        bodyFormData.append("property_type", property);
        bodyFormData.append("no_of_rooms", rooms);
        bodyFormData.append("carpet_area", carpet);

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

  export const sellFurniture = (img,title,desc,catId,date,price,location) => async (dispatch) => {
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
        bodyFormData.append("location", location);

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

  export const sellVehicle = (img,title,desc,catId,date,price,location,fuel,km,trans) => async (dispatch) => {
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
        bodyFormData.append("location", location);
        bodyFormData.append("fuel", fuel);
        bodyFormData.append("km_driven", km);
        bodyFormData.append("transmission_type", trans);

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
