//@flow
import React, { PureComponent } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

type Props = {
  placeholder: string,
  onChangeText: any,
  style: any,
  //   underlineColorAndroid: any,
  value: ?any,
  keyboardType?: any
};

export default class EmailInput extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 24 }}>{this.props.label}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          style={this.props.style}
          autoCapitalize="none"
          // underlineColorAndroid={this.props.underlineColorAndroid}
          value={this.props.value}
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : null
          }
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
