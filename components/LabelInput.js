import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
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
export default function LabelInput({ input }) {
  return (
    <View style={styles.card}>
      <Text style={styles.email}> {input.email} </Text>
      <Text> {comment.body} </Text>
      <Text style={styles.title}> {input.name} </Text>
      <TextInput
        style={{
          height: 40,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={text => this.setState({ text })}
        value={this.state.password}
      />
    </View>
  );
}
