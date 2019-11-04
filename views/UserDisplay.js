import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import UserDetailsDisplay from "../components/UserDetailsDisplay";
import AnamneseDisplay from "../components/AnamneseDisplay";
import ProcedimentoDisplay from "../components/ProcedimentoDisplay";
import UsuarioCard from "../components/UsuarioCard";
import Panel from "../components/Panel";
import api from "../services/api";
import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
import { AsyncStorage } from "react-native";
import { NavigationEvents } from "react-navigation";

class UserDisplay extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  state = {
    user: {},
    loggedUser: {},
    anamnese: {},
    procedimento: null
  };
  handlePress = () => {
    this.props.navigation.navigate("Procedimento", {
      paciente: this.state.user
    });
  };

  handleProcedimento = decision => {
    let _this = this;
    api
      .editProcedimento(
        { status: decision, id: this.state.procedimento.id },
        "editProcedimento"
      )
      .then(function(res) {
        console.log("res.data");
        console.log(res.data);
        _this.setState({ procedimento: res.data[0] });
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  async _getStorageValue() {
    var value = await AsyncStorage.getItem("ITEM_NAME");
    return value;
  }

  componentDidMount() {
    let _this = this;
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      const user = _this.props.navigation.getParam("user");
      AsyncStorage.getItem("@user:profile").then(function(res) {
        _this.setState({ loggedUser: res });
      });
      _this.setState({ user });
      _this.setState({ anamnese: user.anamneseDb });
      console.log(user);
      api.get("procedimento", { id: user.id }).then(res => {
        if (res.data[0] == undefined) _this.setState({ procedimento: 1 });
        else _this.setState({ procedimento: res.data[0] });
      });
    });
  }
  componentWillUnmount() {
    this.focusListener.remove();
  }
  render() {
    if (this.state.procedimento == null) return null;
    return (
      <View style={styles.mainConatinerStyle}>
        <ScrollView>
          {this.state.procedimento != 1 && this.state.procedimento != null ? (
            <Panel key={5} title={"Procedimento"} bgColor={"grey"}>
              <ProcedimentoDisplay
                procedimento={this.state.procedimento}
                profile={this.state.loggedUser}
                onPress={this.handleProcedimento}
              />
            </Panel>
          ) : null}

          <Panel key={1} title={"Dados Pessoais"} bgColor={"grey"}>
            <UserDetailsDisplay
              user={this.state.user}
              onPress={this.handlePressUserCard}
            />
          </Panel>
          <Panel key={2} title={"Anamnese"} bgColor={"grey"}>
            <AnamneseDisplay
              user={this.state.anamnese}
              onPress={this.handlePressUserCard}
            />
          </Panel>
          <Panel key={3} title={"História Médica Pregressa"} bgColor={"grey"}>
            <UserDetailsDisplay
              user={this.state.user}
              onPress={this.handlePressUserCard}
            />
          </Panel>
          <Panel key={4} title={"História Familar"} bgColor={"grey"}>
            <UserDetailsDisplay
              user={this.state.user}
              onPress={this.handlePressUserCard}
            />
          </Panel>
        </ScrollView>
        <ActionButton
          style={styles.floatingMenuButtonStyle}
          onPress={this.handlePress}
          buttonColor="rgba(231,76,60,1)"
        ></ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainConatinerStyle: {
    backgroundColor: "#d6d7da",
    flexDirection: "column",
    flex: 1
  },
  floatingMenuButtonStyle: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35
  }
});
export default UserDisplay;
