import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import { Button } from "react-native";
class Login extends Component {
  state = { user: "", password: "" };
  componentDidMount() {}
  handlePress = () => {
    // api
    //   .login({ user: "this.state.user", password: "this.state.password" })
    //   .then(res => {
    this.props.navigation.navigate("HomePage", { user: "res" });
    //   });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 0.6 }}>LOGO e titulo</Text>
        <DefaultInput
          placeholder={"Usuario"}
          onChangeText={username => this.setState({ user })}
          style={styles.inputStyle}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          value={this.state.user}
        />
        <DefaultInput
          placeholder={"Senha"}
          onChangeText={username => this.setState({ password })}
          style={styles.inputStyle}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          value={this.state.username}
        />
        <DefaultButton
          style={{ flex: 0.2 }}
          title={"Acessar"}
          onPress={this.handlePress}
          disabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 0.1,
    marginBottom: 5,
    backgroundColor: "grey",
    borderBottomColor: "#0091ea",
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 20
  }
});

export default Login;
