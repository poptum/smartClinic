import axios from "axios";
import { safeRequests } from "./api/index";

const api = {
  login: async function(email, password) {
    return axios.post(
      "http://ec2-18-228-36-214.sa-east-1.compute.amazonaws.com:3000/api/login",
      { email, password }
    );
  },
  registerUser: async function(user) {
    return safeRequests(
      "http://ec2-18-228-36-214.sa-east-1.compute.amazonaws.com:3000/api/user",
      "POST",
      user
    );
  },
  registerPatient: async function(payload, endpoint) {
    return safeRequests(
      "http://ec2-18-228-36-214.sa-east-1.compute.amazonaws.com:3000/api/" +
        endpoint,
      "POST",
      payload
    );
  },
  getUsers: function(endpoint) {
    return safeRequests(
      "http://ec2-18-228-36-214.sa-east-1.compute.amazonaws.com:3000/api/" +
        endpoint,
      "GET"
    );
  }
};

export default api;
