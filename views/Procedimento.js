import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";
import ProcedimentoForm from "../components/ProcedimentoForm";
import api from "../services/api";

import { Button } from "react-native";

class Procedimento extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  }
  state = { etapa: 1, usuario:null }; 
  componentDidMount() {
    this.state.etapa = 1;
  }
  handlePress = (form, etapa) => {
    let payload = {}
    Object.assign(payload, form);
    let _this = this;
    api
    .registerPatient(payload, 'paciente')
    .then(function(res) {
      console.log(res.data)
      //mensagem amigavel
      _this.setState({ usuario: res.data.id });
      _this.setState({ etapa: 2 });
    })
  };

  render() {
    return (
        <View style={{ flex: 1 }}>
          <ProcedimentoForm salvar={this.handlePress} />
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

export default Procedimento;
