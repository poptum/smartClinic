import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import QRCode from 'react-native-qrcode';

class QrCode extends Component {
    // static navigationOptions = {
    //     drawerLabel: () => null
    //   }
    componentDidMount() {}
    handlePress = () => {};
    render() {
        return (
        <View style={{ flex: 1 }}>
            <Text style={{ flex: 0.2, marginTop: 30 }}>
                Esse é o qrcode gerado para o usuario **Nome do Usuario**
            </Text>
            <QRCode
                value={'teste'}
                size={100}/>
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
