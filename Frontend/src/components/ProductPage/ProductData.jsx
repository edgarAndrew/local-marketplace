import { Container, Card, Typography, CardContent, Paper,Button } from "@mui/material";
import { useState } from "react"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductData = ({prod}) => {
  const { isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [temp,setTemp] = useState(false)
  const navigate = useNavigate()

  return (
    <Container>
      <Paper elevation={0} variant="outlined" sx={{padding: "1rem"}}>
        <Typography variant="h4" component="div">
          {prod.title}
        </Typography>
        <Typography variant="h5" component="div">
          Rs {prod.price}
        </Typography>
        <Typography variant="h7" component="div">
          Posting Date : {prod.created_at}
        </Typography>
        <Typography variant="h7" component="div">
          Purchase Date : {prod.date_of_purchase}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {prod.location}
        </Typography>
        <Typography variant="body2">
          {prod.description}
        </Typography>
      </Paper>

      <Paper elevation={0} variant="outlined" sx={{padding: "1rem"}}>
        <Typography variant="h5" component="div">
          Owner : {prod.owner.name}
        </Typography>

        <Button variant="outlined" onClick={()=>setTemp(temp ? false : true)}>Contact</Button>
        
        {
          isAuthenticated && temp ? <Typography variant="h5" component="div">
            Contact : {prod.owner.phone}
          </Typography> : navigate('/login')
        }
        

      </Paper>
    </Container>
  );
};
export default ProductData;
