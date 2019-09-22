//@flow
import React, { PureComponent } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Text, View } from "react-native";
type Props = {
  label: string,
  placeholder?: string,
  onChangeText?: any,
  size: number | string,
  defaultValue: any,
  style: ?any,
  editable: ?boolean
};

export default class CepInput extends PureComponent<Props> {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 24 }}>{this.props.label}</Text>
        <TextInputMask
          type={"custom"}
          options={{
            mask: "99999-999"
          }}
          onChangeText={this.props.onChangeText}
          style={this.props.style}
          value={this.props.value}
        />
      </View>
    );
  }
}
