import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Picker,
  ScrollView
} from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import CepInput from "../components/CepInput";
import CelInput from "../components/CelInput";
import DateInput from "../components/DateInput";

import { Button } from "react-native";
import { Row } from "native-base";
type Props = {
  salvar: any
};
class PatientForm extends Component {
  state = {
    name: "",
    cep: "",
    bairro: "",
    rua: "",
    cidade: "",
    estado: "",
    telefone: "",
    ocupacao: "",
    nacionalidade: "",
    naturalidade: "",
    genero: "",
    data_nascimento: "",
    cor: "",
    mae: "",
    indicacao: "",
    observacao: ""
  };
  componentDidMount() {}
  handlePress = () => {
    this.props.salvar(this.state.name);
  };

  handleCEP = cep => {
    this.setState({ cep });
    if (cep.length >= 9)
      fetch("https://api.pagar.me/1/zipcodes/" + cep, { method: "get" })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            estado: data.state,
            cidade: data.city,
            bairro: data.neighborhood,
            rua: data.street
          });
        });
  };
  render() {
    return (
      <View style={{ flex: 1, marginTop: 25, marginleft: 20 }}>
        <ScrollView>
          <View style={styles.inputWrapper}>
            <DefaultInput
              label={"Nome"}
              placeholder={"Nome"}
              onChangeText={name => this.setState({ name })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.state.name}
            />

            <View style={{}}>
              <View style={{ flex: 0.5 }}>
                <CepInput
                  defaultValue={""}
                  size={22}
                  label={"CEP"}
                  placeholder={""}
                  onChangeText={cep => this.handleCEP(cep)}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.cep}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Bairro"}
                  placeholder={"Bairro"}
                  onChangeText={bairro => this.setState({ bairro })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.bairro}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Estado"}
                  placeholder={"Estado"}
                  onChangeText={estado => this.setState({ estado })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.estado}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Cidade"}
                  placeholder={"Cidade"}
                  onChangeText={cidade => this.setState({ cidade })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.cidade}
                />
              </View>
            </View>

            <DefaultInput
              label={"Rua"}
              placeholder={"Rua"}
              onChangeText={rua => this.setState({ rua })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.state.rua}
            />
            <DefaultInput
              label={"Local de Trabalho"}
              placeholder={"Local de Trabalho"}
              onChangeText={local_trabalho => this.setState({ local_trabalho })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.state.local_trabalho}
            />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <CelInput
                  size={22}
                  label={"Telefone"}
                  placeholder={""}
                  onChangeText={telefone => this.setState({ telefone })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.telefone}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <CelInput
                  defaultValue={""}
                  size={22}
                  label={"Telefone Comercial"}
                  style={styles.inputStyle}
                  placeholder={""}
                  onChangeText={telefone_comercial =>
                    this.setState({ telefone_comercial })
                  }
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.telefone_comercial}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Ocupação"}
                  placeholder={"Ocupação"}
                  onChangeText={ocupacao => this.setState({ ocupacao })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.ocupacao}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <DateInput
                  label={"Data de Nascimento"}
                  placeholder={"Data de Nascimento"}
                  onChangeText={data_nascimento =>
                    this.setState({ data_nascimento })
                  }
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.data_nascimento}
                  defaultValue={"02/05/1999"}
                  size={22}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Nacionalidade"}
                  placeholder={"Nacionalidade"}
                  onChangeText={nacionalidade =>
                    this.setState({ nacionalidade })
                  }
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.nacionalidade}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Naturalidade"}
                  placeholder={"Naturalidade"}
                  onChangeText={naturalidade => this.setState({ naturalidade })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.naturalidade}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <Text>Genero: </Text>
                <Picker
                  selectedValue={this.state.genero}
                  style={styles.selectStyle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ genero: itemValue })
                  }
                >
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Feminino" value="feminino" />
                </Picker>
              </View>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Cor"}
                  placeholder={"Cor"}
                  onChangeText={cor => this.setState({ cor })}
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.cor}
                />
              </View>
            </View>

            <DefaultInput
              label={"Mãe"}
              placeholder={"Mãe"}
              onChangeText={mae => this.setState({ mae })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.state.mae}
            />
            <DefaultInput
              label={"Indicação"}
              placeholder={"Indicação"}
              onChangeText={indicacao => this.setState({ indicacao })}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.state.indicacao}
            />
            <Text style={{ fontSize: 24 }}>Observação Importante</Text>
            <TextInput
              placeholder={"Observação"}
              onChangeText={observacao => this.setState({ observacao })}
              style={styles.inputStyle}
              autoCapitalize="none"
              // underlineColorAndroid={this.props.underlineColorAndroid}
              value={this.state.observacao}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <DefaultButton
            style={{ marginTop: 30 }}
            title={"Salvar"}
            onPress={this.handlePress}
            disabled={false}
          />
        </ScrollView>
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
