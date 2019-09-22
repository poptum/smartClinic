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
  style: any,
  editable: ?boolean
};

export default class CelInput extends PureComponent<Props> {
  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>

        <TextInputMask
          type={"custom"}
          options={{
            mask: "(99) 99999-9999"
          }}
          onChangeText={this.props.onChangeText}
          style={this.props.style}
          value={this.props.value}
        />
      </View>
    );
  }
}
