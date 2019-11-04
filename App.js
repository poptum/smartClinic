import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PostList from "./views/PostList";
import CommentsList from "./views/CommentsList";
import UsersList from "./views/UsersList";
import UserDisplay from "./views/UserDisplay";
import Usuario from "./views/Usuario";
import Login from "./views/Login";
import Home from "./views/Home";
import Procedimentos from "./views/Procedimentos";
import Procedimento from "./views/Procedimento";
import QrCode from "./views/QrCode";
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
      drawerLockMode: "locked-closed"
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
    navigationOptions: () => ({})
  },
  Procedimentos: {
    screen: Procedimentos,
    navigationOptions: () => ({
      title: "Prodecimentos"
    })
  },
  Procedimento: {
    screen: Procedimento,
    navigationOptions: () => ({
      title: "Procedimento"
    })
  },
  QrCode: {
    screen: QrCode,
    navigationOptions: () => ({
      title: "QrCode"
    })
  },
  UserDisplay: {
    screen: UserDisplay,
    navigationOptions: () => ({})
  },
  HomePage: {
    screen: Home,
    navigationOptions: () => ({
      title: "Home"
    })
  }
});

export default createAppContainer(DrawerNavigator);
