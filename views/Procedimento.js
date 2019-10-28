import React, { Component } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import ProcedimentoForm from "../components/ProcedimentoForm";
import api from "../services/api";

import { Button } from "react-native";

class Procedimento extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  state = {
    etapa: 1,
    usuario: null,
    paciente: null,
    pacienteId: null,
    professores: null,
    estudantes: null,
    professor: null,
    aluno: null
  };
  componentDidMount() {
    const paciente = this.props.navigation.getParam("paciente");
    this.setState({ paciente: paciente });
  }
  componentWillMount() {
    api.getUsersForProcedure("usuarios_procedimento").then(res => {
      this.setState({ professores: res.data.professores });
      this.setState({ estudantes: res.data.estudantes });
    });
  }
  handlePress = form => {
    let payload = {};
    let _this = this;
    Object.assign(payload, form);
    payload.professor = this.state.professor;
    payload.aluno = this.state.aluno;
    payload.paciente = this.state.paciente.id;
    payload.status = "Pendente";
    console.log(payload);
    console.log(this.state.paciente);
    api.registerProcedure(payload, "createProcedure").then(function(res) {
      ToastAndroid.show("Procedimento criado com sucesso", ToastAndroid.SHORT);
      _this.props.navigation.navigate("UserDisplay", {
        user: _this.state.paciente
      });
    });
  };
  onValueChangeEstudante = aluno => {
    if (aluno !== 0) {
      this.setState({ aluno });
    }
  };
  onValueChangeProfessor = professor => {
    if (professor !== 0) {
      this.setState({ professor });
    }
  };

  render() {
    if (this.state.professores == null || this.state.estudantes == null)
      return null;
    return (
      <View style={{ flex: 1 }}>
        <ProcedimentoForm
          salvar={this.handlePress}
          paciente={this.state.paciente.nome}
          professor={this.state.professor}
          aluno={this.state.aluno}
          professores={this.state.professores}
          estudantes={this.state.estudantes}
          onValueChangeEstudante={this.onValueChangeEstudante}
          onValueChangeProfessor={this.onValueChangeProfessor}
          handlePress={this.handlePress}
        />
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
