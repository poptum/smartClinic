import React, { PureComponent } from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
  Image
} from "react-native";
import PropTypes from "prop-types";
import { Row } from "native-base";
type Props = { title: string, onPress: any, user: any, disabled?: boolean };

// TODO conferir a estilização dos componentes
export default class UsuarioCard extends PureComponent<Props> {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.card}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/user.png")}
          />
          <View style={styles.body}>
            <Text style={styles.title}> {this.props.user.nome} </Text>
            <Text style={styles.email}> {this.props.user.cep} </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}> Procedimento </Text>
            <Text style={styles.email}> Aguardando Aprovação </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  },
  body: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 10
  },
  email: {
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 10
  }
});
