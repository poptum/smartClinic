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
type Props = { user: any };

// TODO conferir a estilização dos componentes
export default class ProcedimentoDisplay extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.containerDenouncer}>
        <View style={styles.row}>
          <Text style={styles.title}> Procedimento a ser realizado : </Text>
          <Text style={styles.subtitle}>
            {/* {this.props.user.queixa_principal} */}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> Aluno a realizar o procedimento : </Text>
          <Text style={styles.subtitle}>
            {/* {this.props.user.queixa_principal} */}
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <DefaultButton
              style={{ backgroundColor: "green", flex: 0.8 }}
              title={"Aprovar"}
              onPress={this.handlePress}
              disabled={false}
            />
          </View>
          <View style={styles.column}>
            <DefaultButton
              title={"Reprovar"}
              onPress={this.handlePress}
              disabled={false}
            />
          </View>
        </View>
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
    paddingLeft: 25,
    paddingRight: 25
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
