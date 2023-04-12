import './App.css'
import {useEffect} from 'react'
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Forgot from './components/ForgotPassword/Forgot';
import {loadSeller} from './actions/user'
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadSeller())
  },[])

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
        </StyledEngineProvider>
    </>
  )
}

export default App
