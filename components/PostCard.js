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
    paddingBottom: 10,
    fontFamily: "sans-serif-condensed"
  }
});
// TODO conferir a estilização dos componentes
export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}> {post.title} </Text>
      <Text> {post.body} </Text>
    </View>
  );
}
