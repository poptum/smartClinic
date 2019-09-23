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
import Hmp from "../components/Hmp";
import Anamnese from "../components/Anamnese";
import HistoriaFamiliar from "../components/HistoriaFamiliar";

import { Button } from "react-native";

class Usuario extends Component {
  state = { etapa: 5 };
  componentDidMount() {
    this.state.etapa = 1;
  }
  handlePress = user => {
    this.setState({ etapa: 2 });
  };

  render() {
    if (this.state.etapa == 1)
      return (
        <View style={{ flex: 1 }}>
          <PatientForm salvar={this.handlePress} />
        </View>
      );
    if (this.state.etapa == 2)
      return (
        <View style={{ flex: 1 }}>
          <Anamnese salvar={this.handlePress} />
        </View>
      );
    if (this.state.etapa == 3)
      return (
        <View style={{ flex: 1 }}>
          <Hmp salvar={this.handlePress} />
        </View>
      );
    if (this.state.etapa == 4)
      return (
        <View style={{ flex: 1 }}>
          <Hmp salvar={this.handlePress} />
        </View>
      );
    if (this.state.etapa == 5)
      return (
        <View style={{ flex: 1 }}>
          <HistoriaFamiliar salvar={this.handlePress} />
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
