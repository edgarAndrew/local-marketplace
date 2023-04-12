import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./seller.module.css";
import { useDispatch,useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {useState,useEffect} from 'react'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { sellElectronics } from "../../actions/product";

const Electronics = () => {
  
  const dispatch = useDispatch()
  const alert = useAlert()
  const catId = "b9367b0f-44ff-40d7-88a7-6f944fb037a5"
  const [file,setFile] = useState(null)

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const title = data.get('title')
    const desc = data.get('desc')
    const date = data.get('date')
    const price = data.get('price')
    const location = data.get('location')
    const brand = data.get('brand')
    //console.log(title,desc,date,price,location,brand,file)
    dispatch(sellElectronics(file,title,desc,catId,date,price,location,brand))
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
            variant="outlined"
            name='desc'
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
                Brand
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="Brand"
                name="brand"
                label="Brand"
                required
              >
                <MenuItem value="APPLE">APPLE</MenuItem>
                <MenuItem value="SAMSUNG">SAMSUNG</MenuItem>
                <MenuItem value="ONEPLUS">ONEPLUS</MenuItem>
                <MenuItem value="REALME">REALME</MenuItem>
                <MenuItem value="NOKIA">NOKIA</MenuItem>
                <MenuItem value="MOTOROLLA">MOTOROLLA</MenuItem>
              </Select>
            </FormControl>


          <Box>
            <div>Date of Purchase</div>
            <TextField id="Purchase" type="date" name='date' variant="outlined" required />
          </Box>

          <TextField
            id="Price"
            type="number"
            label="Price"
            variant="outlined"
            name='price'
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
export default Electronics;
