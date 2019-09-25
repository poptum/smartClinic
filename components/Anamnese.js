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
class Anamnese extends Component {
  state = {
    queixa_principal: "",
    historia_doenca_atual: "",
    hitoria_medica_atual: ""
  };

  componentDidMount() {}
  handlePress = () => {
    this.props.salvar(this.state, 2);
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 25, marginleft: 20 }}>
        <ScrollView>
          <View style={styles.inputWrapper}>
            <Text style={{ fontSize: 24 }}>
              Queixa Principal ou motivo da consulta (QP)
            </Text>
            <TextInput
              placeholder={""}
              onChangeText={queixa_principal =>
                this.setState({ queixa_principal })
              }
              style={styles.inputStyle}
              autoCapitalize="none"
              // underlineColorAndroid={this.props.underlineColorAndroid}
              value={this.state.queixa_principal}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={{ fontSize: 24 }}>História da doença atual (HDA)</Text>
            <TextInput
              placeholder={""}
              onChangeText={historia_doenca_atual =>
                this.setState({ historia_doenca_atual })
              }
              style={styles.inputStyle}
              autoCapitalize="none"
              // underlineColorAndroid={this.props.underlineColorAndroid}
              value={this.state.historia_doenca_atual}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={{ fontSize: 24 }}>História médica atual (HMA)</Text>
            <TextInput
              placeholder={""}
              onChangeText={hitoria_medica_atual =>
                this.setState({ hitoria_medica_atual })
              }
              style={styles.inputStyle}
              autoCapitalize="none"
              // underlineColorAndroid={this.props.underlineColorAndroid}
              value={this.state.hitoria_medica_atual}
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

export default Anamnese;
