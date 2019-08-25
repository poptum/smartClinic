import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PostList from "./views/PostList";
import CommentsList from "./views/CommentsList";
import UsersList from "./views/UsersList";
import Usuario from "./views/Usuario";
import Login from "./views/Login";
import Home from "./views/Home";
import SideMenu from "./components/SideMenu";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
//TODO criar um componente para substituir o sidemenu que mostra todas as paginas disponiveis no DrawerNavigator
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: "locked-closed",
      title: "Login"
    })
  },
  UsersList: {
    screen: UsersList,
    navigationOptions: () => ({
      title: "Usuarios"
    })
  },
  Usuario: {
    screen: Usuario,
    navigationOptions: () => ({
      title: "Usuario"
    })
  },
  HomePage: {
    screen: Home,
    navigationOptions: () => ({
      title: "Smart Clinic"
    })
  }
});

export default createAppContainer(DrawerNavigator);
