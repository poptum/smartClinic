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

class Usuario extends Component {
  state = {};
  componentDidMount() {}
  handlePress = () => {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 0.2 }}>TODO FAZER O CRUD DE USUARIOS</Text>
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

export default Usuario;
