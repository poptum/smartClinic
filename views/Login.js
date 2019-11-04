import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ToastAndroid,
  ImageBackground
} from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import { AsyncStorage } from "react-native";
import { Button } from "react-native";
import logo from "../assets/logo.png";

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
      <ImageBackground source={logo} style={{width: '100%', height: '80%'}}>
        <View style={styles.container}>
          <View style={{ flex: 0.6 }}></View>
          <View style={{ flex: 0.4 }}>
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
          <View style={{ marginTop: 10}}></View>
          <DefaultButton
            title={"Acessar"}
            onPress={this.handlePress}
            disabled={false}
          />
          </View>
      
        </View>
      </ImageBackground>
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
