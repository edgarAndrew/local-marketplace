import { Container,Backdrop,CircularProgress } from "@mui/material";
import HomeCarousel from "./Carousel";
import classes from './product.module.css'
import ProductData from "./ProductData";
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from 'react'
import {getProduct} from '../../actions/product'
import {useParams} from 'react-router-dom'


const ProductPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getProduct(id))
    },[])

    const { loading, error, product } = useSelector(
        (state) => state.product
      );
    
    if (loading)
      return (
        <Backdrop open={true}>
          <CircularProgress />
        </Backdrop>
      );
    else if(product)
        return(
        <Container className={classes.container}>
            <HomeCarousel/>
            <ProductData/>
        </Container>
    )
}
export default ProductPage;