import { Box, Container } from "@mui/system";
import ItemCard from "../UI/Card";
import classes from "./home.module.css";
import { Typography,Backdrop,CircularProgress } from "@mui/material";
import {useEffect} from 'react'
import {getCategories,getProducts} from "../../actions/home"
import { useDispatch,useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch()

  const { loading, error, products,categories } = useSelector(
    (state) => state.home
  );

  useEffect(()=>{
    dispatch(getCategories())
    dispatch(getProducts())
  },[])

  if (loading)
    return (
      <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>
    );
  else if(products && categories)
    return (
    <Box>
      <Box className={classes.homeHeader}>
        <img
          src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt=""
        />
      </Box>
      <Container sx={{padding: "2rem 0"}}>
        <Typography>Recommendations</Typography>
        <Box maxWidth="lg" className={classes.homeContainer}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </Box>
      </Container>
    </Box>
  );
};
export default Home;
