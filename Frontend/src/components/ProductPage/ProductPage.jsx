import { Container } from "@mui/material";
import HomeCarousel from "./Carousel";
import classes from './product.module.css'
import ProductData from "./ProductData";

const ProductPage = () => {
    return(
        <Container className={classes.container}>
            <HomeCarousel/>
            <ProductData/>
        </Container>
    )
}
export default ProductPage;