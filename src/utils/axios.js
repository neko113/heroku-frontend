import axios from "axios";

const baseURL = process.env.NODE_ENV == "production" ? "https://test63194.herokuapp.com/" : "http://localhost:3000";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true; // 다른 도메인 간에 쿠키 전달 가능

export default axios;
