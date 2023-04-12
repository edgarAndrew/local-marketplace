import React,{useState,useEffect} from 'react'
import "./Login.css"
import {Typography,Button,Backdrop,CircularProgress} from "@mui/material"
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import {login,googleLogin} from '../../actions/user'
import {useAlert} from 'react-alert'
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import googleSignIn from "../../assets/images/google_sign.png";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert()

  const [GoogleAuth, setGoogleAuth] = useState(null);
  const clientId =
    "830762272261-4rf6dr10u19limjbdrt8uf2bk5kojbej.apps.googleusercontent.com";

  const { message ,loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    function start() {
      gapi.auth2
        .init({
          clientId: clientId,
          scope: "",
        })
        .then((obj) => {
          setGoogleAuth(obj);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gapi.load("client:auth2", start);
  });

  const onSuccessLogin = async(res) => {
    const profile = res.profileObj;
    const access_token = gapi.auth.getToken().access_token;
    setGoogleAuth(gapi.auth2.getAuthInstance());
    const tokenId = GoogleAuth.currentUser.le.tokenId;
    console.log(tokenId)
    dispatch(googleLogin(tokenId, profile));
  };
  const onFailureLogin = (res) => {
    console.log(res);
  };

  const loginHandler = (e)=>{
    e.preventDefault();
    dispatch(login(email,password))
  }

  useEffect(() => {
    if (error) {
      alert.error(error.message)
      dispatch({ type: "clearErrors" })
    }
    if(message){
      alert.success(message)
      dispatch({ type: "clearErrors" })
    }
  }, [dispatch, error, alert,message]);

  if (loading)
    return (
      <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>
    );
  else
    return (
    <div className='login'>
      <form className='loginForm' onSubmit={loginHandler}>
        <Typography variant='h3' style={{padding:"2vmax",textAlign:"center"}}>
          Twist Hunt
        </Typography>
          <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Link to="/forgot">
            <Typography>
              Forgot Password
            </Typography>
          </Link>
          <Button type="submit">Login</Button>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                // variant="outlined"
                size="small"
                color="neutral"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src={googleSignIn} alt="" width="200px"/>
              </Button>
            )}
            buttonText="Login"
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={"single_host_origin"}
          />
          <Link to="/register">
            <Typography>
              New User? 
            </Typography>
          </Link>
      </form>
    </div>
  )
}

export default Login