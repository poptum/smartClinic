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

import { Button } from "react-native";

class Usuario extends Component {
  state = { name: "", login: "", password: "", profile: "" };
  componentDidMount() {}
  handlePress = user => {
    api
    .registerUser(user)
    .then(function(res) {
      console.log('retornou com sucesso')
      console.log(res)
    })
    .catch(function(err) {
      console.log("teste");
      console.log(err);
    });
  };

  render() { 
    return (
      <View style={{ flex: 1 }}>
        <PatientForm salvar={this.handlePress} />
        {/* <Hmp /> */}
        {/* <View style={{ flex: 0.1 }}>
          <DefaultInput
            placeholder={"Nome"}
            onChangeText={name => this.setState({ name })}
            style={styles.inputStyle}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            value={this.state.name}
          />
        </View>
        <View style={{ flex: 0.1 }}>
          <Text>Login: </Text>
          <DefaultInput
            placeholder={"Login/email"}
            onChangeText={login => this.setState({ login })}
            style={styles.inputStyle}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            value={this.state.login}
          />
        </View>
        <View style={{ flex: 0.1 }}>
          <Text>Senha: </Text>
          <DefaultInput
            placeholder={"Senha"}
            onChangeText={password => this.setState({ password })}
            style={styles.inputStyle}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            value={this.state.password}
          />
        </View>
        <View style={{ flex: 0.1, marginBottom: 50 }}>
          <Text>Perfil: </Text>
          <Picker
            selectedValue={this.state.profile}
            style={{ backgroundColor: "grey", marginBottom: 20 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ profile: itemValue })
            }
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Professor" value="prof" />
            <Picker.Item label="Estudante" value="student" />
            <Picker.Item label="Paciente" value="patient" />
          </Picker>
        </View>
        <View>
          <DefaultButton
            style={{ flex: 0.1, marginTop: 30 }}
            title={"Salvar"}
            onPress={this.handlePress}
            disabled={false}
          />
        </View> */}
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
