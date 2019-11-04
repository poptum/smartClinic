import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Picker } from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import api from "../services/api";

type Props = {
  salvar: any,
  paciente: any,
  professor: any,
  aluno: any,
  estudantes: any,
  professores: any
};
class PatientForm extends Component {
  state = {
    nome: null,
    descricao: null
  };
  componentWillMount() {
    this.setState({ paciente: this.props.paciente });
  }
  handlePress = () => {};

  render() {
    return (
      <View style={{ flex: 1, marginTop: 25, marginleft: 20 }}>
        <View style={styles.inputWrapper}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <Text>Estudante: </Text>
              <Picker
                selectedValue={this.props.aluno}
                style={styles.selectStyle}
                onValueChange={(itemValue, itemIndex) =>
                  this.props.onValueChangeEstudante(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Escolha um aluno" value="0" />
                {this.props.estudantes.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.id}
                      key={item.id}
                    />
                  );
                })}
              </Picker>
            </View>
            <View style={{ flex: 0.5 }}>
              <Text>Professor: </Text>
              <Picker
                selectedValue={this.props.professor}
                style={styles.selectStyle}
                onValueChange={(itemValue, itemIndex) =>
                  this.props.onValueChangeProfessor(itemValue, itemIndex)
                }
              >
                <Picker.Item label="Escolha um professor" value="0" />
                {this.props.professores.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.id}
                      key={item.id}
                    />
                  );
                })}
              </Picker>
            </View>
            {/* <View style={{ flex: 0.5 }}>
              <DefaultInput
                label={"Professor"}
                placeholder={"Professor"}
                onChangeText={professor => this.setState({ professor })}
                style={styles.inputStyle}
                underlineColorAndroid={"rgba(0,0,0,0)"}
                value={this.state.professor}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <DefaultInput
                label={"Aluno"}
                placeholder={"Aluno"}
                onChangeText={aluno => this.setState({ aluno })}
                style={styles.inputStyle}
                underlineColorAndroid={"rgba(0,0,0,0)"}
                value={this.state.aluno}
              />
            </View> */}
          </View>

          <View>
            <DefaultInput
              label={"Paciente"}
              placeholder={"Paciente"}
              onChangeText={paciente => this.setState({ paciente })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.props.paciente}
            />
            <DefaultInput
              label={"Procedimento"}
              placeholder={"Procedimento"}
              onChangeText={nome => this.setState({ nome })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.state.nome}
            />

            <Text style={{ fontSize: 24 }}>Descrição do procedimento</Text>
            <TextInput
              placeholder={""}
              onChangeText={descricao => this.setState({ descricao })}
              style={styles.inputStyle}
              autoCapitalize="none"
              // underlineColorAndroid={this.props.underlineColorAndroid}
              value={this.state.descricao}
              multiline={true}
              numberOfLines={8}
            />
          </View>
        </View>

        <DefaultButton
          style={{ marginTop: 30 }}
          title={"Salvar"}
          onPress={() => this.props.handlePress(this.state)}
          disabled={false}
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
    marginBottom: 10,
    marginRight: 20,
    paddingLeft: 15
  },
  selectStyle: {
    marginBottom: 5,
    backgroundColor: "grey",
    borderBottomColor: "#0091ea",
    marginRight: 20,
    marginBottom: 10,
    paddingLeft: 15
  },
  inputWrapper: {
    marginLeft: 20
  }
});

export default PatientForm;
