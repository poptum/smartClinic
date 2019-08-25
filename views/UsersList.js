import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import UsuarioCard from "../components/UsuarioCard";
import api from "../services/api";
import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
class UsersList extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "André Xavier Muniz",
        email: "andre@gmail.com",
        profile: "professor"
      },
      {
        id: 2,
        name: "Ana Clara Xavier Muniz",
        email: "ana@gmail.com",
        profile: "student"
      },
      {
        id: 3,
        name: "Milena Sobrenome",
        email: "milena@gmail.com",
        profile: "student"
      },
      {
        id: 4,
        name: "Lucas Xavier Muniz",
        email: "lucas@gmail.com",
        profile: "patient"
      },
      {
        id: 5,
        name: "Duda Marques",
        email: "duda@gmail.com",
        profile: "patient"
      }
    ]
  };

  handlePress = () => {
    this.props.navigation.navigate("Usuario");
  };
  componentDidMount() {
    const { navigation } = this.props;
    const postId = navigation.getParam("postId");
    // TODO fazer a api para buscar os usuarios
    // api.getComments(postId).then(comments => {
    //   this.setState({ comments });
    // });
  }
  render() {
    return (
      <View style={styles.mainConatinerStyle}>
        <FlatList
          data={this.state.users}
          renderItem={({ item }) => <UsuarioCard user={item} />}
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
