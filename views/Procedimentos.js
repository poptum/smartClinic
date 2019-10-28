import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProcedimentoCard from "../components/ProcedimentoCard";
import DefaultInput from "../components/DefaultInput";
import api from "../services/api";
import ActionButton from "react-native-action-button";
import { SearchBar } from "react-native-elements";
class Procedimentos extends Component {
  state = {
    filter: "",
    procedimentos: null,
    // [
    // { user: "Andre", procedimento: "Canal", status: "Aprovado", id: 1 },
    // { user: "Lucas", procedimento: "Limpeza", status: "Reprovado", id: 2 },
    // {
    //   user: "Patricia",
    //   procedimento: "Obturação",
    //   status: "Em Analise",
    //   id: 3
    // },
    // { user: "Flavio", procedimento: "Remoção", status: "Finalizado", id: 4 }
    // ],
    filterArray: null
    // [
    // { user: "Andre", procedimento: "Canal", status: "Aprovado", id: 1 },
    // { user: "Lucas", procedimento: "Limpeza", status: "Reprovado", id: 2 },
    // {
    //   user: "Patricia",
    //   procedimento: "Obturação",
    //   status: "Em Analise",
    //   id: 3
    // },
    // { user: "Flavio", procedimento: "Remoção", status: "Finalizado", id: 4 }
    // ]
  };

  handlePress = () => {
    this.props.navigation.navigate("Procedimento");
  };

  handlePressUserCard = item => {
    this.props.navigation.navigate("UserDisplay", { user: item.pacienteDb });
  };
  handleFilter = filter => {
    this.setState({ filter });
    const newData = this.state.procedimentos.filter(item => {
      const itemData = `${item.user.toUpperCase()} ${item.procedimento.toUpperCase()}`;
      const textData = filter.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({ filterArray: newData });
  };
  componentDidMount() {
    api.get("procedimentos").then(res => {
      this.setState({ procedimentos: res.data });
      this.setState({ filterArray: res.data });
    });
  }
  render() {
    if (this.state.procedimentos == null || this.state.filterArray == null)
      return null;
    return (
      <View style={styles.mainConatinerStyle}>
        <View>
          <View>
            <SearchBar
              placeholder="Nome, data"
              lightTheme
              round
              onChangeText={filter => this.handleFilter(filter)}
              value={this.state.filter}
            />
          </View>
          <View></View>
        </View>
        <FlatList
          data={this.state.filterArray}
          renderItem={({ item }) => (
            <ProcedimentoCard
              procedimento={item}
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
export default Procedimentos;
