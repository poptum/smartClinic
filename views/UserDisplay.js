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
  state = {
    user: {},
    anamnese: {}
  };
  handlePress = () => {
    this.props.navigation.navigate("Usuario");
  };

  handlePressUserCard = () => {
    this.props.navigation.navigate("Usuario");
  };
  componentDidMount() {
    const user = this.props.navigation.getParam("user");
    console.log("user1123421");
    console.log(user.anamneseDb);
    this.setState({ user });
    this.setState({ anamnese: user.anamneseDb });
  }
  render() {
    return (
      <View style={styles.mainConatinerStyle}>
        <ScrollView>
          <Panel key={5} title={"Procedimento"} bgColor={"grey"}>
            <ProcedimentoDisplay
              user={this.state.anamnese}
              onPress={this.handlePressUserCard}
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
