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

class UserDisplay extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  }
  state = {
    user: {},
    loggedUser: {},
    anamnese: {},
    procedimento: {}
  };
  handlePress = () => {
    this.props.navigation.navigate("Procedimento");
  };

  handleProcedimento = (decision) => {
    api.editProcedure({status:decision}, 'editProcedure')
      .then(function(res) {
        this.setState({ procedimento: res.data });
      })
      .catch(function(err) {
        console.log("teste");
        console.log(err);
      });
  };

  componentDidMount() {
    const user = this.props.navigation.getParam("user");
    const loggedUser = AsyncStorage.getItem("@user:profile");
    this.setState({ user });
    this.setState({ loggedUser });
    this.setState({ anamnese: user.anamneseDb });
  }
  render() {
    return (
      <View style={styles.mainConatinerStyle}>
        <ScrollView>
          {/* mostrar procedimento somente se tiver procedimentos */}
          <Panel key={5} title={"Procedimento"} bgColor={"grey"}>
            <ProcedimentoDisplay
              procedimento={this.state.procedimento}
              profile = {this.state.loggedUser}            
              onPress={this.handleProcedimento}
            />
          </Panel>

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
