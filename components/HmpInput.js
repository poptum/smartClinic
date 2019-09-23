import React, { PureComponent } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Text, View, StyleSheet } from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
type Props = {
  label: string,
  placeholder?: string,
  onChangeText?: any,
  style: ?any,
  relata: any,
  nao_relata: any,
  tipo_input: any,
  check: any,
  obj: any
};
import { CheckBox } from "react-native-elements";
// state = {};

export default class HmpInput extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={{ fontSize: 24 }}>{this.props.label}</Text>
        <View style={{ flexDirection:"row", flex: 1}}>
          <View style={{ flex: 0.5 }}>
            <CheckBox
              title="Relata história de alterações"
              checked={this.props.obj.relata}
              onPress={() =>
                this.props.check(this.props.nome_input, {
                  nao_relata: false,
                  relata: !this.props.obj.relata,
                  descricao: this.props.obj.descricao
                })
              }
            />
          </View>
          <View style={{ flex: 0.5 }}>
            <CheckBox
              title="Não relata história de alterações"
              checked={this.props.obj.nao_relata}
              onPress={() =>
                this.props.check(this.props.nome_input, {
                  nao_relata: !this.props.obj.nao_relata,
                  relata: false,
                  descricao: this.props.obj.descricao
                })
              }
            />
        </View>
        </View>
        
        <DefaultInput
              label={"Qual(is) ? Quando ?"}
              placeholder={""}
              onChangeText={descricao => this.props.onChangeText(descricao)}
              style={styles.inputStyle}
              underlineColorAndroid={"rgba(0,0,0,0)"}
              value={this.props.obj.descricao}
              //   onChangeText={indicacao => this.setState({ indicacao })}
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
  },
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  }
});
