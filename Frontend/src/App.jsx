import './App.css'
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {

  return (
    <>
      <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </StyledEngineProvider>
    </>
  )
}

export default App
