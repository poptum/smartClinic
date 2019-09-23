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
import MultiLineInput from "../components/MultiLineInput";
import HmpInput from "../components/HmpInput";
type Props = {
  salvar: any
};
class HistoriaFamiliar extends Component {
  state = {
    doenca_familiar: { relata: false, nao_relata: false, descricao: "" },
    pais_vivos: { relata: false, nao_relata: false, descricao: "" },
    irmaos: { numero: "", mortos: "", descricao: "" },
    filhos: { numero: "", mortos: "", descricao: "" }
  };

  componentDidMount() {}
  handlePress = () => {
    this.props.salvar(this.state.name);
  };
  handleCheck = (nome_input, obj) => {
    console.log("handleCheck");
    console.log(nome_input);
    console.log(obj);
    this.setState({ [nome_input]: obj });
  };
  handleOnChangeText = (nome_input, motivo) => {
    let obj = this.state[nome_input];
    console.log("nome_input");
    console.log(obj);
    obj.descricao = motivo;
    this.setState({ [nome_input]: obj });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 25,
          backgroundColor: "#d6d7da"
        }}
      >
        <ScrollView>
          <HmpInput
            label={"Há alguma doença predominante em sua família ?"}
            nome_input={"doenca_familiar"}
            label_opcao_um={"Não"}
            label_opcao_dois={"Sim"}
            label_descricao={"Qual(is)"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                doenca_familiar: {
                  relata: this.state.doenca_familiar.relata,
                  nao_relata: this.state.doenca_familiar.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.doenca_familiar}
          />
          <HmpInput
            label={"Pais vivos:"}
            nome_input={"pais_vivos"}
            label_opcao_um={"Não"}
            label_opcao_dois={"Sim"}
            label_descricao={"causa mortis"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                pais_vivos: {
                  relata: this.state.pais_vivos.relata,
                  nao_relata: this.state.pais_vivos.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.pais_vivos}
          />
          <View style={styles.containerStyle}>
            <Text style={{ fontSize: 24 }}>{"Irmãos:"}</Text>
            <View style={{ flexDirection: "row", flex: 0.3 }}>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Quantidade"}
                  placeholder={""}
                  onChangeText={numero =>
                    this.setState({
                      irmaos: {
                        numero: numero,
                        mortos: this.state.nao_relata,
                        descricao: this.state.descricao
                      }
                    })
                  }
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  value={this.state.irmaos.numero}
                  keyboardType={"numeric"}
                  //   onChangeText={indicacao => this.setState({ indicacao })}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <DefaultInput
                  label={"Mortos"}
                  placeholder={""}
                  onChangeText={mortos =>
                    this.setState({
                      irmaos: {
                        numero: this.state.irmaos.numero,
                        mortos: mortos,
                        descricao: this.state.irmaos.descricao
                      }
                    })
                  }
                  style={styles.inputStyle}
                  underlineColorAndroid={"rgba(0,0,0,0)"}
                  keyboardType={"numeric"}
                  value={this.state.irmaos.mortos}
                  //   onChangeText={indicacao => this.setState({ indicacao })}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", flex: 0.7 }}>
              <MultiLineInput
                label={"Causa mortis"}
                placeholder={""}
                onChangeText={descricao =>
                  this.setState({
                    irmaos: {
                      numero: this.state.irmaos.nuemro,
                      mortos: this.state.irmaos.mortos,
                      descricao: descricao
                    }
                  })
                }
                style={styles.inputStyle}
                underlineColorAndroid={"rgba(0,0,0,0)"}
                value={this.state.irmaos.descricao}
                multiline={true}
                numberOfLines={4}
                //   onChangeText={indicacao => this.setState({ indicacao })}
              />
            </View>
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
    paddingLeft: 15,
    flexDirection: "row",
    flex: 1
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
  },
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    flex: 1
  }
});

export default HistoriaFamiliar;
