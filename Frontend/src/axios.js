import axios from "axios";

const developmentURL = "http://192.168.103.120:8000"
const testingURL = "http://127.0.0.1:8000"

export const currentURL = testingURL
//export const currentURL = developmentURL
axios.defaults.baseURL = currentURL


axios.interceptors.request.use(function (req) {
    const user = localStorage.getItem('user');
    if (user) {
      const { token } = JSON.parse(localStorage.getItem('user'));
      req.headers.authorization = `Bearer ${token}`;
      return req;
    }
    return req;
});