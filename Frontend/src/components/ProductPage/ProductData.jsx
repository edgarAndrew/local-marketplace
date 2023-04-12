import { Container, Card, Typography, CardContent, Paper } from "@mui/material";

const ProductData = () => {
  return (
    <Container>
      <Paper elevation={0} variant="outlined" sx={{padding: "1rem"}}>
        <Typography variant="h5" component="div">
          lorem ipsum
        </Typography>
        <Typography variant="h4" component="div">
          Rs 10000
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          reiciendis.
        </Typography>
      </Paper>
    </Container>
  );
};
export default ProductData;
