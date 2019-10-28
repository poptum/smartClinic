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
          <Text style={styles.title}> Procedimento a ser realizado : </Text>
          <Text style={styles.subtitle}>{this.props.procedimento.nome}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Aluno a realizar o procedimento : </Text>
          <Text style={styles.subtitle}>{this.props.procedimento.aluno}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Descrição do procedimento : </Text>
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
                style={{ backgroundColor: "green", flex: 0.8 }}
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
          <View>
            <Text style={styles.subtitle}>
              {this.props.procedimento.status}
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
    flex: 0.5,
    paddingLeft: 10,
    paddingRight: 10
  },
  tricolumn: {
    flex: 0.3
  },
  containerDenouncer: {
    height: 500,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "500"
  },
  subtitle: {
    fontSize: 15
  }
});
