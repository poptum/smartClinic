import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import { Button } from "react-native";
import { Drawer, Container, Header, Content } from "native-base";
class SideBar extends Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: "#fff" }]}>
        <Text>
          <Icon name="rocket" size={30} color="#900" />
          Conteúdo side bar
        </Text>
      </View>
    );
  }
}
class Home extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  state = { user: "", password: "" };
  componentDidMount() {}
  handlePress = () => {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 0.2 }}>
          Bem Vindo *usuario*, futuramente aqui ficarão seus compromissos
        </Text>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ flex: 0.8, backgroundColor: "red" }}>
          Espaço dedicado para leitura de qrcode
        </Text>
      </View>
    );
  }
}
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", marginTop: 20 }}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 0.1,
    marginBottom: 5,
    backgroundColor: "grey",
    borderBottomColor: "#0091ea",
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 20
  }
});

export default Home;
