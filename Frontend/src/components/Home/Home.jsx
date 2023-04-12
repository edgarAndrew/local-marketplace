import { Box, Container, Paper, Avatar,Button } from "@mui/material";
import ItemCard from "../UI/Card";
import classes from "./home.module.css";
import { Typography, Backdrop, CircularProgress, Box, Container, Paper, Avatar } from "@mui/material";
import { useEffect } from "react";
import { getCategories, getProducts,filter } from "../../actions/home";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);
  
  const { loading, error, categories, products } = useSelector(
    (state) => state.home
  );
  
  const searchHandler = (id) =>{
    dispatch(filter(id))
  }

  if (loading)
    return (
      <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>
    );
  else if (categories && products)
    return (
      <Box>
        <Box className={classes.homeHeader}>
          <img
            src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt=""
          />
        </Box>

        <Container sx={{ padding: "2rem 0" }}>
          <Typography variant="h5" fontWeight={600}>
            Choose Categories
          </Typography>
          <Box className={classes.categories}>
            {categories.map((cat) => (
              <Button onClick={()=>searchHandler(cat.id)}>
                  <Paper
                    elevation={0}
                    variant="outlined"
                    className={classes.catCard}
                  >
                    <Avatar alt="Remy Sharp" src={cat.img} variant="sqaure" />
                    <Typography>{cat.name}</Typography>
                  </Paper>
              </Button>
            ))}
          </Box>

          <Typography variant="h5" fontWeight={600}>
            Recommendations
          </Typography>
          <Box maxWidth="lg" className={classes.homeContainer}>
            {products.results.map((prod) => (
              <ItemCard prod={prod} />
            ))}
          </Box>
        </Container>
      </Box>
    );
};
export default Home;
