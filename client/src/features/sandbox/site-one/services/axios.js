import axios from "axios";

export const authAxios = axios.create({
   baseURL: "http://localhost:4010",
});

export const resAxios = axios.create({
   baseURL: "http://localhost:4000",
   withCredentials: true,
});
