import apiConfig from "./config";
import axios from "axios";

export const index = (endPoint, method, payload, headers = {}) => {
  const accessToken = AsyncStorage.getItem("@user:token");
  headers["Cookie"].accessToken = accessToken;
  if (method == "POST") {
    payload.token = accessToken;
    return axios.post(endPoint, payload);
  } else if (method == "GET") return axios.get(endPoint, headers);
};
