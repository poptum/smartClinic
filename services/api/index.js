import fetchival from "fetchival";
import _ from "lodash";
import apiConfig from "./config";

export const api = (endPoint, payload, method, headers = {}) => {
  const accessToken = AsyncStorage.getItem("@user:token");
  if (method == "POST") {
    if (payload) payload.token = accessToken;

    return axios.post(endPoint, payload);
  } else if (method == "GET") return axios.get(endPoint);
};
