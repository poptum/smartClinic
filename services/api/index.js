import apiConfig from "./config";
import axios from "axios";
import { AsyncStorage } from "react-native";

export async function safeRequests(endPoint, method, payload, headers = {}) {
  const accessToken = await AsyncStorage.getItem("@user:token");
  let config = {
    headers: { Cookie: "token=" + accessToken },
    withCredentials: true
  };
  if (method == "POST") {
    return axios.post(endPoint, payload, config);
  } else if (method == "GET") {
    config.params = payload;
    return axios.get(endPoint, config);
  }
}
