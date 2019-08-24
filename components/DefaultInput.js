//@flow
import React, { PureComponent } from "react";
import { TextInput } from "react-native";

type Props = {
  placeholder: string,
  onChangeText: any,
  style: any,
  //   underlineColorAndroid: any,
  value: ?any
};

export default class EmailInput extends PureComponent<Props> {
  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
        style={this.props.style}
        autoCapitalize="none"
        // underlineColorAndroid={this.props.underlineColorAndroid}
        value={this.props.value}
      />
    );
  }
}
