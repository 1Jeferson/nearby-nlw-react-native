import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.100.248:3333",
  timeout: 700,
});