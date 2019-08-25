import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";
import { Row } from "native-base";

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
// TODO conferir a estilização dos componentes
export default function UsuarioCard({ user }) {
  return (
    <View style={styles.card}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/user.png")}
      />
      <View style={styles.body}>
        <Text style={styles.title}> {user.name} </Text>
        <Text style={styles.email}> {user.profile} </Text>
        <Text> {user.body} </Text>
      </View>
    </View>
  );
}
