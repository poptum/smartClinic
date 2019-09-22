//@flow
import React, { PureComponent } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

type Props = {
  placeholder: string,
  onChangeText: any,
  style: any,
  //   underlineColorAndroid: any,
  value: ?any
};

export default class MultiLineInput extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={{ fontSize: 24 }}>{this.props.label}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          style={this.props.style}
          autoCapitalize="none"
          // underlineColorAndroid={this.props.underlineColorAndroid}
          value={this.props.value}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerStyle: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  }
});
