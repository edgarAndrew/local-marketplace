import { Box, Container, Paper, Avatar, Typography } from "@mui/material";
import classes from "./seller.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions/home";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Seller = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { loading, error, categories } = useSelector((state) => state.home);

  return (
    categories && (
      <Container className={classes.catgories}>
        <Typography variant="h5" fontWeight={600}>
          Choose Category
        </Typography>

        <Box className={classes.categories}>
          {categories.map((cat) => (
              <Paper
                elevation={0}
                variant="outlined"
                className={classes.catCard}
                component={Link}
                to={`${cat.name}`}
                state={{ category: cat.id, categoryName: cat.name }}
              >
                <Avatar alt="Remy Sharp" src={cat.img} variant="sqaure" />
                <Typography>{cat.name}</Typography>
              </Paper>
          ))}
        </Box>
      </Container>
    )
  );
};
export default Seller;
