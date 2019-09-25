import apiConfig from "./config";
import axios from "axios";
import { AsyncStorage } from 'react-native';

export async function safeRequests(endPoint, method, payload, headers = {}) {
  const accessToken = await AsyncStorage.getItem("@user:token");
  console.log(accessToken)
  let config = {
    headers:{ Cookie:"token=" + accessToken },
    withCredentials:true
  }
  if (method == "POST") {
    console.log('POST')
    console.log(endPoint)
    console.log(payload)
    console.log(config)
   return axios.post(endPoint, payload, config)
  } else if (method == "GET") return axios.get(endPoint, config);
}