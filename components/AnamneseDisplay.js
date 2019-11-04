// import React, { Component } from "react";

// import {
//   StyleSheet,
//   TouchableNativeFeedback,
//   Text,
//   View,
//   Image
// } from "react-native";
// import PropTypes from "prop-types";
// import { Row } from "native-base";
// type Props = { user: any };

// // TODO conferir a estilização dos componentes
// export default class UserDetailsDisplay extends Component {
//   render() {
//     return (
//       <View style={styles.containerDenouncer}>
//         <View style={styles.body}>
//           <Text style={styles.title}> Nome </Text>
//           <Text style={styles.title}> {this.props.user.nome} </Text>
//         </View>
//         <View style={styles.body}>
//           <Text style={styles.title}> Nome </Text>
//           <Text style={styles.title}> {this.props.user.nome} </Text>
//         </View>
//         <Text style={styles.title}> {this.props.user.ocupacao} </Text>
//         <Text style={styles.title}> {this.props.user.nacionalidade} </Text>
//         <Text style={styles.title}> {this.props.user.naturalidade} </Text>
//         <Text style={styles.title}> {this.props.user.genero} </Text>
//         <Text style={styles.title}> {this.props.user.data_nascimento} </Text>
//         <Text style={styles.title}> {this.props.user.cor} </Text>
//         <Text style={styles.title}> {this.props.user.mae} </Text>
//         <Text style={styles.title}> {this.props.user.cep} </Text>
//         <Text style={styles.title}> {this.props.user.bairro} </Text>
//         <Text style={styles.title}> {this.props.user.rua} </Text>
//         <Text style={styles.title}> {this.props.user.cidade} </Text>
//         <Text style={styles.title}> {this.props.user.estado} </Text>
//         <Text style={styles.title}> {this.props.user.telefone} </Text>
//         <Text style={styles.title}> {this.props.user.telefone_comercial}</Text>
//         <Text style={styles.title}> {this.props.user.indicacao} </Text>
//         <Text style={styles.title}> {this.props.user.observacao} </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     flex: 1,
//     flexDirection: "row",
//     paddingTop: 10,
//     paddingBottom: 10,
//     padding: 10,
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#000"
//   },
//   body: {
//     flex: 1,
//     flexDirection: "column",
//     paddingLeft: 10
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: "500",
//     paddingBottom: 10
//   },
//   email: {
//     fontSize: 15,
//     fontWeight: "500",
//     paddingBottom: 10
//   }
// });

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
export default class AnamneseDisplay extends Component {
  render() {
    return (
      <View style={styles.containerDenouncer}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {" "}
            Queixa principal ou motivo da consulta(QP):{" "}
          </Text>
          <Text style={styles.subtitle}>
            {this.props.user.queixa_principal}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> História da doença atual (HDA): </Text>
          <Text style={styles.subtitle}>
            {" "}
            {this.props.user.historia_doenca_atual}{" "}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> História médica atual (HMA): </Text>
          <Text style={styles.subtitle}>
            {" "}
            {this.props.user.hitoria_medica_atual}{" "}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
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
