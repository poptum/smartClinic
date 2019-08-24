import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PostList from "./views/PostList";
import CommentsList from "./views/CommentsList";
import Login from "./views/Login";
import Home from "./views/Home";
import SideMenu from "./components/SideMenu";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: "locked-closed",
      title: "Smart Clinic"
    })
  },
  CommentsList: {
    screen: CommentsList,
    navigationOptions: () => ({
      title: "Comentarios"
    })
  },
  HomePage: {
    screen: Home,
    navigationOptions: () => ({
      title: "Home"
    })
  }
});

export default createAppContainer(DrawerNavigator);
