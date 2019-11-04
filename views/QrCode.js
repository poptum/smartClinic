import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode";
import DefaultButton from "../components/DefaultButton";

class QrCode extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  state = {
    user: null
  };
  componentDidMount() {
    const user = this.props.navigation.getParam("user");
    this.setState({ user });
  }
  handlePress = () => {
    api.getUser("paciente").then(res => {
      this.props.navigation.navigate("user", { user: res.data });
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <QRCode value={this.state.user} size={180} />
        <Text style={{ flex: 0.2, marginTop: 30 }}>
          Esse é o qrcode gerado para o usuario **Nome do Usuario**, opções
          serão criadas futuramente para compartilhação desse qrcode (opção de
          envio por email / impressão )
        </Text>
        <DefaultButton
          style={{ marginTop: 30 }}
          title={"Salvar"}
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

export default QrCode;
