import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";
import PatientForm from "../components/PatientForm";
import Hmp from "../components/Hmp";
import Anamnese from "../components/Anamnese";
import HistoriaFamiliar from "../components/HistoriaFamiliar";
import api from "../services/api";

import { Button } from "react-native";

class Usuario extends Component {
  state = { etapa: 1, usuario:null }; 
  componentDidMount() {
    this.state.etapa = 1;
  }
  handlePress = (form, etapa) => {
    let payload = {}
    Object.assign(payload, form);
    let _this = this;
    //salvar formulario referente a etapa e atualiar a etapa na tabela paciente 
    //passar o usuario para a proxima etapa do cadastro
    switch (etapa) {
      case 1:
        payload.etapa_cadastro = 1;
          api
      .registerPatient(payload, 'paciente')
      .then(function(res) {
        console.log(res.data)
        //mensagem amigavel
        _this.setState({ usuario: res.data.id });
        _this.setState({ etapa: 2 });
      })
      .catch(function(err) {  
        console.log("teste");
        console.log(err);
      });
        break;
      case 2:
          payload.paciente = this.state.usuario;
        payload.etapa_cadastro = 2;

          api
          .registerPatient(payload, 'anamnese')
          .then(function(res) {
            //mensagem amigavel
        _this.setState({ etapa: 3 });
          })
          .catch(function(err) {
            console.log("teste");
            console.log(err);
          });
            break;
      case 3:
          payload.etapa_cadastro = 3;

          payload.paciente = this.state.usuario;
          api
          .registerPatient(payload, 'hmp')
          .then(function(res) {
            //mensagem amigavel
        _this.setState({ etapa: 4 });
          })
          .catch(function(err) {
            console.log("teste");
            console.log(err);
          }); 
            break;
        case 4:
        payload.etapa_cadastro = 4;
            api
            .registerPatient(payload, 'historiaFamiliar')
            .then(function(res) {
              //mensagem amigavel
              // this.setState({ etapa: 3 });
            })
            .catch(function(err) {
              console.log("teste");
              console.log(err);
            });
              break;
      default:
        console.log('Sorry, we are out of ' + expr + '.');
    }
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
    // if (this.state.etapa == 4)
    //   return (
    //     <View style={{ flex: 1 }}>
    //       <Hmp salvar={this.handlePress} />
    //     </View>
    //   );
    if (this.state.etapa == 4)
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
