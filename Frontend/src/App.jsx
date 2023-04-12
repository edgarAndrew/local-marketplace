import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Forgot from "./components/ForgotPassword/Forgot";
import { loadSeller } from "./actions/user";
import { useDispatch, useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import Seller from "./components/Seller/Seller";
import Profile from "./components/Profile/Profile";
import Forms from "./components/Seller/Forms";
import { Typography } from "@mui/material";
import Vehicles from "./components/Seller/Vehicles";
import Properties from "./components/Seller/Properties";
import Furniture from "./components/Seller/Furniture";
import Electronics from "./components/Seller/Electronics";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSeller());
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Login />}
            />
            <Route
              path="/sell"
              element={isAuthenticated ? <Seller /> : <Login />}
            />
            <Route
              path="/sell/Electronics"
              element={isAuthenticated ? <Electronics /> : <Login />}
            />
            <Route
              path="/sell/Properties"
              element={isAuthenticated ? <Properties /> : <Login />}
            />
            <Route
              path="/sell/Vehicles"
              element={isAuthenticated ? <Vehicles /> : <Login />}
            />
            <Route
              path="/sell/Furniture"
              element={isAuthenticated ? <Furniture /> : <Login />}
            />
            <Route
              path="/sell/form"
              element={isAuthenticated ? <Forms /> : <Login />}
            />
          </Route>
          <Route
            path="*"
            element={<Typography variant="h1">Opps! 404 Not Found!</Typography>}
          />
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
