import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./seller.module.css";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {sellFurniture} from '../../actions/product'
import {useAlert} from 'react-alert'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const Furniture = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const catId = "b639e337-8daf-4f80-b953-a6fba76bd38c"
  const [file,setFile] = useState(null)

  const { loading, message,error } = useSelector((state) => state.product);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const title = data.get('title')
    const desc = data.get('desc')
    const date = data.get('date')
    const price = data.get('price')
    const location = data.get('location')
    dispatch(sellFurniture(file,title,desc,catId,date,price,location))
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file)
  };

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
            name="desc"
            label="Description"
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


          <Box>
            <div>Date of Purchase</div>
            <TextField id="Purchase" type="date" name="date" variant="outlined" required />
          </Box>

          <TextField
            id="Price"
            name='price'
            type="number"
            label="Price"
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
export default Furniture;
