import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
type Props = {
  salvar: any
};
class PatientForm extends Component {
  state = {
    aluno: null,
    professor: null,
    procedimento: null,
    descricao: null
  };
  componentDidMount() {}
  handlePress = () => {
    
  };

  render() {
    return (
        <View style={{ flex: 1, marginTop: 25, marginleft: 20 }}>
            <View style={styles.inputWrapper}>
                <View style={{flexDirection: "row"}}>

                    <View style={{ flex: 0.5 }}>
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
                    </View>
                </View>
                
                <View>
                    <DefaultInput
                        label={"Paciente"}
                        placeholder={"Paciente"}
                        onChangeText={paciente => this.setState({ paciente })}
                        style={styles.inputStyle}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        value={this.state.paciente}
                    /> 
                    <DefaultInput
                        label={"Procedimento"}
                        placeholder={"Procedimento"}
                        onChangeText={procedimento => this.setState({ procedimento })}
                        style={styles.inputStyle}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        value={this.state.procedimento}
                    /> 
                
                    <Text style={{ fontSize: 24 }}>
                        Descrição do procedimento
                    </Text>
                    <TextInput
                        placeholder={""}
                        onChangeText={descricao =>
                            this.setState({ descricao })
                        }
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
                onPress={this.handlePress}
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
