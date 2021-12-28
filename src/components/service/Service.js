import axios from "axios";

// Service1 : for login
export const Service1 = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "json",
});

// Service2
export const Service2 = axios.create({
    baseURL: process.env.REACT_APP_API_URL_2,
    responseType: "json",
});
