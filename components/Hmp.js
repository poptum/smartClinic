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
class Hmp extends Component {
  state = {
    sistema_cardiovascular: { relata: false, nao_relata: false, descricao: "" },
    sistema_respiratorio: { relata: false, nao_relata: false, descricao: "" },
    sistema_digestorio: { relata: false, nao_relata: false, descricao: "" },
    sistema_genitourinario: { relata: false, nao_relata: false, descricao: "" },
    sistema_endocrino: { relata: false, nao_relata: false, descricao: "" },
    sistema_nervoso_central: {
      relata: false,
      nao_relata: false,
      descricao: ""
    },
    sistema_sensitivo: { relata: false, nao_relata: false, descricao: "" },
    sistema_hematopoietico_e_linfatico: {
      relata: false,
      nao_relata: false,
      descricao: ""
    },
    alergias: { relata: false, nao_relata: false, descricao: "" },
    estado_emocional_e_psiquico: {
      relata: false,
      nao_relata: false,
      descricao: ""
    },
    doenças_infecto_contagiosas: {
      relata: false,
      nao_relata: false,
      descricao: ""
    },
    internado_cirurgia_radioterapia_quimioterapia: {
      relata: false,
      nao_relata: false,
      descricao: ""
    },
    ultima_consulta_medica: "",
    medicamentos_atual_12_meses: {
      relata: false,
      nao_relata: false,
      descricao: ""
    },
    outras_informacoes: "",
    hmp: "",
    traumatismo: { relata: false, nao_relata: false, descricao: "" }
  };

  componentDidMount() {}
  handlePress = () => {
    this.props.salvar(this.state, 3);
  };
  handleCheck = (nome_input, obj) => {
    this.setState({ [nome_input]: obj });
  };
  handleOnChangeText = (nome_input, motivo) => {
    let obj = this.state[nome_input];
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
            label={
              "Sistema Cardiovascular (pressão arterial, angina, infarto, insuficiência cardiaca, prótese valvar, sopro, arrítmias, cirurgias cardíacas, marca-passo, prolapso de válvula mitral ou febre reumática com cardiopatia)"
            }
            nome_input={"sistema_cardiovascular"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_cardiovascular: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_cardiovascular}
          />
          <HmpInput
            label={
              "Sistema respiratório (pneumonia, asma, bronquite, fibrose cística, tuberculose, enfisema, dificuldade para respirar, sinusite, tosse crônica, etc):"
            }
            nome_input={"sistema_respiratorio"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_respiratorio: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_respiratorio}
          />
          <HmpInput
            label={
              "Sistema digestório (ásia, gastrite, cirrose, icterícia, anorexia nervosa, bulimia, colite, diarreia persistente etc):"
            }
            nome_input={"sistema_digestorio"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_digestorio: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_digestorio}
          />
          <HmpInput
            label={
              "Sistema genitourinário (insuficiência renal, cálculos, gravidez, doenças sexualmente transmissíveis):"
            }
            nome_input={"sistema_genitourinario"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_genitourinario: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_genitourinario}
          />
          <HmpInput
            label={
              "Sistema endócrino (diabetes, distúrbios de tireoide, distúrbio hipofisário, etc):"
            }
            nome_input={"sistema_endocrino"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_endocrino: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_endocrino}
          />
          <HmpInput
            label={
              "Sistema nervoso central (convulsões, desmaios, perda de consciência, paralisia cerebral, trauma, crânio encefálico, distúrbios sensoriais, epilepsia, síndrome do pânico, derrame, cefaleia intensa, etc):"
            }
            nome_input={"sistema_nervoso_central"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_nervoso_central: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_nervoso_central}
          />
          <HmpInput
            label={
              "Sistema sensitivo (cegueira, glaucoma, conjutivite, úlceras, auditivo etc):"
            }
            nome_input={"sistema_sensitivo"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_sensitivo: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_sensitivo}
          />
          <HmpInput
            label={
              "Sistemas hematopoiético e linfático (anemia, transfusões, sangramento nasal, equimoses, alterações de coagulação, susceptibilidade a infecções, linfadenopatia, hemofilia, leucemia, etc):"
            }
            nome_input={"sistema_hematopoietico_e_linfatico"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                sistema_hematopoietico_e_linfatico: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.sistema_hematopoietico_e_linfatico}
          />
          <HmpInput
            label={
              "Alergias (anestésicos, analgésicos, antibióticos, anti-inflamatórios, matais, látex, iodo etc):"
            }
            nome_input={"alergias"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                alergias: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.alergias}
          />
          <HmpInput
            label={
              "Estado emocional e psiquico (estresse, ansiedade, depressão e psicose):"
            }
            nome_input={"estado_emocional_e_psiquico"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                estado_emocional_e_psiquico: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.estado_emocional_e_psiquico}
          />
          <HmpInput
            label={"Tem ou teve doenças infecto contagiosas? "}
            nome_input={"doenças_infecto_contagiosas"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                doenças_infecto_contagiosas: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.doenças_infecto_contagiosas}
          />
          <HmpInput
            label={
              "Já esteve internado ou se submeteu a alguma cirurgia, tratamentos com radioterapia ou quimioterapia?"
            }
            nome_input={"internado_cirurgia_radioterapia_quimioterapia"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                internado_cirurgia_radioterapia_quimioterapia: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.internado_cirurgia_radioterapia_quimioterapia}
          />
          <MultiLineInput
            label={"Ultima consulta médica (época e motivo)"}
            placeholder={""}
            onChangeText={ultima_consulta_medica =>
              this.setState({ ultima_consulta_medica })
            }
            style={styles.inputStyle}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            value={this.state.ultima_consulta_medica}
          />
          {/* consulta medica */}
          <HmpInput
            label={
              "Medicamentos em uso atual ou nos últimos 12 meses (nome comercial, genérico, reações adversar etc):"
            }
            nome_input={"medicamentos_atual_12_meses"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                medicamentos_atual_12_meses: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.medicamentos_atual_12_meses}
          />
          <MultiLineInput
            label={"Outras informações"}
            placeholder={""}
            onChangeText={outras_informacoes =>
              this.setState({ outras_informacoes })
            }
            style={styles.inputStyle}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            value={this.state.outras_informacoes}
          />
          <MultiLineInput
            label={"História Odontolófica Pregressa ()"}
            placeholder={""}
            onChangeText={ultima_consulta_medica =>
              this.setState({ ultima_consulta_medica })
            }
            style={styles.inputStyle}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            value={this.state.ultima_consulta_medica}
          />

          {/* outras informações
          hmp */}
          <HmpInput
            label={
              "Já sofreu algum tipo de traumatismo na boca, nos dentes ou nos maxilares?"
            }
            nome_input={"traumatismo"}
            check={this.handleCheck}
            onChangeText={descricao =>
              this.setState({
                traumatismo: {
                  relata: this.state.relata,
                  nao_relata: this.state.nao_relata,
                  descricao
                }
              })
            }
            obj={this.state.traumatismo}
          />
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

export default Hmp;
