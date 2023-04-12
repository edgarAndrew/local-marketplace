import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./seller.module.css";
import { useState,useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch,useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {sellProperty} from '../../actions/product'

const Properties = () => {
    
    const dispatch = useDispatch()
    const alert = useAlert()
    const catId = "acd587d9-8612-4ed1-aee5-3a108b92349c"
    const [file,setFile] = useState(null)

    const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const title = data.get('title')
    const desc = data.get('desc')
    const date = data.get('date')
    const price = data.get('price')
    const location = data.get('location')
    const property = data.get('property')
    const rooms = data.get('rooms')
    const carpet = data.get('carpet')
    dispatch(sellProperty(title,desc,date,catId,price,location,property,rooms,carpet,file))
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file)
  };

  const { loading, message,error } = useSelector((state) => state.product);

  useEffect(() => {
    if (error) {
      alert.error("Something went wrong,check console");
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert, message]);

  return (
    <Container>
      <Typography variant="h5" fontWeight={600} sx={{ paddingTop: "1rem" }}>
        Fill the product details
      </Typography>
      <Box component="form" className={classes.formBox} onSubmit={formSubmitHandler}>
        <Stack spacing={4}>
          <TextField id="Title" label="Title" name='title' variant="outlined" required />
          <TextField
            id="Desc"
            label="Description"
            name="desc"
            variant="outlined"
            minRows={10}
            required
          />
            
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="Location"
                name="location"
                label="Location"
              >
                <MenuItem value="MARGAO">MARGAO</MenuItem>
                <MenuItem value="PANJIM">PANJIM</MenuItem>
                <MenuItem value="VASCO">VASCO</MenuItem>
                <MenuItem value="MAPUSA">MAPUSA</MenuItem>
                <MenuItem value="PONDA">PONDA</MenuItem>
                <MenuItem value="VALPOI">VALPOI</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">
                Propery Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="PropertyType"
                name="property"
                label="Property Type"
                onChange={(e)=>setProp(e.target.value)}
              >
                <MenuItem value="APARTMENT">APARTMENT</MenuItem>
                <MenuItem value="BUNGLOW">BUNGLOW</MenuItem>
                <MenuItem value="FARMHOUSE">FARMHOUSE</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="NoRooms"
              label="No of rooms"
              name='rooms'
              variant="outlined"
              required
            />

            <TextField
              id="Carpet"
              label="Carpet Area"
              name='carpet'
              variant="outlined"
              required
            />

          <Box>
            <div>Date of Purchase</div>
            <TextField id="Purchase" type="date" name='date' variant="outlined" required />
          </Box>

          <TextField
            id="Price"
            type="number"
            label="Price"
            name='price'
            variant="outlined"
            required
          />
          <input type="file" accept="image/*" required onChange={handleImageChange} />

          <Button type="submit" disabled={loading} variant="contained">
            submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
export default Properties;
