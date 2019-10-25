import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ToastAndroid 
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
  handlePress = (form) => {
    let payload = {}
    Object.assign(payload, form);
    api.registerProcedure(payload, 'createProcedure').then(function(res) {
      this.props.navigation.navigate("UserDisplay", { user: item });
      ToastAndroid.show('Procedimento criado com sucesso', ToastAndroid.SHORT)
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
