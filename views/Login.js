import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ToastAndroid
} from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import { AsyncStorage } from "react-native";
import { Button } from "react-native";
class Login extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  state = { user: "andre@gmail.com", password: "123" };
  componentDidMount() {}
  handlePress = () => {
    let _this = this;
    api
      .login(this.state.user, this.state.password)
      .then(function(res) {
        if (res.data.token) {
          ToastAndroid.show(
            "Procedimento criado com sucesso",
            ToastAndroid.SHORT
          );
          AsyncStorage.setItem("@user:token", res.data.token);
          AsyncStorage.setItem("@user:profile", String(res.data.profile));
          _this.props.navigation.navigate("HomePage");
        } else {
        }
      })
      .catch(function(err) {});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ flex: 0.6 }}>LOGO e titulo</Text>
        <DefaultInput
          label={"Usuario"}
          placeholder={"Usuario"}
          onChangeText={user => this.setState({ user })}
          style={styles.inputStyle}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          value={this.state.user}
        />
        <DefaultInput
          label={"Senha"}
          placeholder={"Senha"}
          onChangeText={password => this.setState({ password })}
          style={styles.inputStyle}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          value={this.state.password}
        />
        <View style={{ marginTop: 30 }}></View>
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
  container: {
    flex: 1,
    marginTop: 64
  },
  inputStyle: {
    marginBottom: 5,
    backgroundColor: "grey",
    borderBottomColor: "#0091ea",
    fontSize: 20,
    paddingLeft: 20,
    height: 60
  }
});

export default Login;
