import axios from 'axios';
import { AsyncStorage } from 'react-native';
const api = {
  getPosts: function() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response.json()
    );
  },
  getComments: function(id) {
    let url = "https://jsonplaceholder.typicode.com/comments";
    if (id) url = url + "?postId=" + id;
    return fetch(url).then(response => response.json());
  },
  login: async function(email, password) {
    return axios
      .post(
        "http://ec2-18-228-36-214.sa-east-1.compute.amazonaws.com:3000/api/login",
        {email, password }
      )

  },
  registerUser: function(id) {
    let url = "https://jsonplaceholder.typicode.com/comments";
    if (id) url = url + "?postId=" + id;
    return fetch(url).then(response => response.json());
  },
  getUser: function(id) {
    let url = "https://jsonplaceholder.typicode.com/comments";
    if (id) url = url + "?postId=" + id;
    return fetch(url).then(response => response.json());
  }
};

export default api;
