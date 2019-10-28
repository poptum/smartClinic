import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import UsuarioCard from "../components/UsuarioCard";
import Panel from "../components/Panel";
import api from "../services/api";
import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
class UsersList extends Component {
  state = {
    users: []
  };

  handlePress = () => {
    this.props.navigation.navigate("Usuario");
  };

  handlePressUserCard = item => {
    this.props.navigation.navigate("UserDisplay", { user: item });
  };
  componentDidMount() {
    api.getUsers("pacientes").then(res => {
      this.setState({ users: res.data });
    });
  }
  render() {
    return (
      <View style={styles.mainConatinerStyle}>
        <FlatList
          data={this.state.users}
          renderItem={({ item }) => (
            <UsuarioCard
              user={item}
              onPress={() => {
                this.handlePressUserCard(item);
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
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
export default UsersList;
