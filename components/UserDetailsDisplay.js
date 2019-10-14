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
export default class UserDetailsDisplay extends Component {
  render() {
    return (
      <View style={styles.containerDenouncer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Nome </Text>
            <Text style={styles.subtitle}> {this.props.user.nome} </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Ocupaçâo </Text>
            <Text style={styles.subtitle}> {this.props.user.ocupacao} </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Gênmero </Text>
            <Text style={styles.subtitle}> {this.props.user.genero} </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Data de Nascimento </Text>
            <Text style={styles.subtitle}>
              {" "}
              {this.props.user.data_nascimento}{" "}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Cor </Text>
            <Text style={styles.subtitle}> {this.props.user.cor} </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Mãe </Text>
            <Text style={styles.subtitle}> {this.props.user.mae} </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Indicação </Text>
            <Text style={styles.subtitle}> {this.props.user.indicacao} </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Observacao </Text>
            <Text style={styles.subtitle}> {this.props.user.observacao} </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Telefone </Text>
            <Text style={styles.subtitle}> {this.props.user.telefone} </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Telefone_comercial </Text>
            <Text style={styles.subtitle}>
              {" "}
              {this.props.user.telefone_comercial}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Nacionalidade </Text>
            <Text style={styles.subtitle}>
              {" "}
              {this.props.user.nacionalidade}{" "}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Naturalidade </Text>
            <Text style={styles.subtitle}>
              {" "}
              {this.props.user.naturalidade}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}> Cep </Text>
            <Text style={styles.subtitle}> {this.props.user.cep} </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}> Estado </Text>
            <Text style={styles.subtitle}> {this.props.user.estado} </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.tricolumn}>
            <Text style={styles.title}> Cidade </Text>
            <Text style={styles.subtitle}> {this.props.user.cidade} </Text>
          </View>
          <View style={styles.tricolumn}>
            <Text style={styles.title}> Bairro </Text>
            <Text style={styles.subtitle}> {this.props.user.estado} </Text>
          </View>
          <View style={styles.tricolumn}>
            <Text style={styles.title}> Rua </Text>
            <Text style={styles.subtitle}> {this.props.user.estado} </Text>
          </View>
        </View>
        {/* 
        <Text style={styles.title}> {this.props.user.telefone} </Text>
        <Text style={styles.title}> {this.props.user.telefone_comercial}</Text>
        <Text style={styles.title}> {this.props.user.indicacao} </Text>
        <Text style={styles.title}> {this.props.user.observacao} </Text> */}
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
    flex: 0.5
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
