import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode";
import DefaultButton from "../components/DefaultButton";
import api from "../services/api";

class QrCode extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  state = {
    user: null
  };
  componentDidMount() {
    const user = this.props.navigation.getParam("user");
    console.log(user)
    this.setState({ user });
  }
  handlePress = () => {
    api.get("paciente", { id: this.state.user }).then(res => {
      this.props.navigation.navigate("UserDisplay", { user: res.data[0] });
    });
  };
  render() {
    if (this.state.user == null) return null;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.3 }}>
        </View>
        <View style={{ flex: 0.7 }}>
        <View style = {styles.qrcode}>
          <QRCode value={this.state.user} size={200} />
        </View>
        <View  style={{ marginTop: 20 }}>
        <Text style={{ paddingRight: 10, paddingLeft: 10 }}>
          Esse é o qrcode gerado para o usuario, opções
          serão criadas futuramente para compartilhação desse qrcode ( envio por email / impressão )
        </Text>
        <View style={{ marginTop: 20 }}>
        <DefaultButton
          title={"Ok"}
          onPress={this.handlePress}
          disabled={false}
        />
        </View>
      
        </View>
      
        </View>
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
  },
  qrcode: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QrCode;
