import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./seller.module.css";
import { useState } from "react";
import { useLocation } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Forms = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const { state: catData } = useLocation();
  console.log(catData);
  const [trans, setAge] = useState("");
  const [prop, setProp] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handlePropChange = (event) => {
    setProp(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h5" fontWeight={600} sx={{ paddingTop: "1rem" }}>
        Fill the product details
      </Typography>
      <Box component="form" className={classes.formBox} onSubmit={formSubmitHandler}>
        <Stack spacing={4}>
          <TextField id="Title" label="Title" variant="outlined" required />
          <TextField
            id="Desc"
            label="Description"
            variant="outlined"
            minRows={10}
            required
          />

          {catData.categoryName === "Electronics" && (
            <TextField id="Brand" label="Brand" variant="outlined" required />
          )}
          {catData.categoryName === "Vehicles" && (
            <TextField id="Fuel" label="Fuel" variant="outlined" required />
          )}
          {catData.categoryName === "Vehicles" && (
            <TextField id="Km" label="Km Driven" variant="outlined" required />
          )}

          {catData.categoryName === "Vehicles" && (
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">
                Transmission Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="trans"
                value={trans}
                label="Transmission Type"
                onChange={handleChange}
              >
                <MenuItem value="Mannual">Manual</MenuItem>
                <MenuItem value="Auto">Auto</MenuItem>
              </Select>
            </FormControl>
          )}

          {catData.categoryName === "Vehicles" && (
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">
                Propery Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="PropertyType"
                value={prop}
                label="Property Type"
                onChange={handlePropChange}
              >
                <MenuItem value="APARTMENT">APARTMENT</MenuItem>
                <MenuItem value="BUNGLOW">BUNGLOW</MenuItem>
                <MenuItem value="FARMHOUSE">FARMHOUSE</MenuItem>
              </Select>
            </FormControl>
          )}
          {catData.categoryName === "Furniture" && (
            <TextField
              id="NoRooms"
              label="No of rooms"
              variant="outlined"
              required
            />
          )}

          {catData.categoryName === "Furniture" && (
            <TextField
              id="Carpet"
              label="Carpet Area"
              variant="outlined"
              required
            />
          )}

          <Box>
            <div>Date of Purchase</div>
            <TextField id="Purchase" type="date" variant="outlined" required />
          </Box>

          <TextField
            id="Price"
            type="number"
            label="Price"
            variant="outlined"
            required
          />

          <input type="file"></input>

          <Button type="submit" variant="contained">
            submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
export default Forms;
