import axios from "axios";

export const developmentURL = "http://localhost:8000"

axios.interceptors.request.use(function (req) {
    const user = localStorage.getItem('user');
    if (user) {
      const { token } = JSON.parse(localStorage.getItem('user'));
      req.headers.authorization = `Bearer ${token}`;
      return req;
    }
    return req;
});