import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Picker
} from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import CepInput from "../components/CepInput";
import PatientForm from "../components/PatientForm";

import { Button } from "react-native";

class Usuario extends Component {
  componentDidMount() {}
  handlePress = user => {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Anamnese salvar={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 5,
    backgroundColor: "grey",
    borderBottomColor: "#0091ea",
    fontSize: 20,
    marginBottom: 10
  }
});

export default Usuario;
