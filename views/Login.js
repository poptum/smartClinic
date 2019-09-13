import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import api from "../services/api";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import { AsyncStorage } from 'react-native';
import { Button } from "react-native";
class Login extends Component {
  state = { user: "andre@gmail.com", password: "123" };
  componentDidMount() {}
  handlePress = () => {
    let _this = this;
    api.login( this.state.user, this.state.password )
    .then(function(res) {
      if(res.data.token) {
        console.log('logado')
        AsyncStorage.setItem('@user:token', res.data.token);
        _this.props.navigation.navigate("HomePage");
      } else {
      }
    }).catch(function(err) {
      console.log('teste')
      console.log(err)
      
    })
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 0.6 }}>LOGO e titulo</Text>
        <DefaultInput
          placeholder={"Usuario"}
          onChangeText={user => this.setState({ user })}
          style={styles.inputStyle}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          value={this.state.user}
        />
        <DefaultInput
          placeholder={"Senha"}
          onChangeText={password => this.setState({ password })}
          style={styles.inputStyle}
          underlineColorAndroid={"rgba(0,0,0,0)"}
          value={this.state.password}
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
