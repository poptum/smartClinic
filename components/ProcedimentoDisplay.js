import DefaultButton from "../components/DefaultButton";
import React, { Component } from "react";

import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
  Image
} from "react-native";
import PropTypes from "prop-types";
import { Row } from "native-base";
type Props = { procedimento: any, profile: any, onPress: any };

handlePress = ordem => {
  if (ordem == "Reprovar") this.props.onPress("reprovar");
  else this.props.onPress("aprovar");
};
// TODO conferir a estilização dos componentes
export default class ProcedimentoDisplay extends Component {
  render() {
    let _this = this;
    return (
      <View style={styles.containerDenouncer}>
        <View style={styles.row}>
          <Text style={styles.title}> Procedimento </Text>
          <Text style={styles.subtitle}>{this.props.procedimento.nome}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Aluno </Text>
          <Text style={styles.subtitle}>
            {this.props.procedimento.pacienteDb.nome}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Descrição: </Text>
          <Text style={styles.subtitle}>
            {this.props.procedimento.descricao}
          </Text>
        </View>
        {console.log(this.props.procedimento.status)}
        {this.props.procedimento.status == "Pendente" &&
        this.props.profile == 2 ? (
          <View style={styles.row}>
            <View style={styles.column}>
              <DefaultButton
                title={"Aprovar"}
                onPress={() => this.props.onPress("Aprovado")}
                disabled={false}
              />
            </View>
            <View style={styles.column}>
              <DefaultButton
                title={"Reprovar"}
                onPress={() => this.props.onPress("Reprovado")}
                disabled={false}
              />
            </View>
          </View>
        ) : (
          <View style={styles.procedimento}>
            <Text style={styles.textStyle}>
              Procedimento {this.props.procedimento.status}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 15
  },
  column: {
    flexDirection: "column",
    flex: 0.5,
    paddingLeft: 5,
    paddingRight: 5
  },
  tricolumn: {
    flex: 0.3
  },
  containerDenouncer: {
    height: 500,
    backgroundColor: "#fff"
  },
  title: {
    flex: 0.5,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  subtitle: {
    flex: 0.5,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  procedimento: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyle: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500"
  }
});
