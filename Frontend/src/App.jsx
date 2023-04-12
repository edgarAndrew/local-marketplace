import './App.css'
import {useEffect} from 'react'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Forgot from './components/ForgotPassword/Forgot';
import {loadSeller} from './actions/user'
import { useDispatch,useSelector } from 'react-redux';
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadSeller())
  },[])

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/product" element={<ProductPage/>}/>
            </Route>
          </Routes>
        </StyledEngineProvider>
    </>
  );
}

export default App;
