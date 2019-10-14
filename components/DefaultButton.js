//@flow

import React, { PureComponent } from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text } from "react-native";
type Props = { title: string, onPress: any, disabled?: boolean, style?: any };

export default class DefaultButton extends PureComponent<Props> {
  render() {
    if (!this.props.disabled || _.isNil(this.props.disabled)) {
      return (
        <TouchableNativeFeedback onPress={this.props.onPress}>
          <View style={styles.default}>
            <Text style={styles.fontStyle}>
              {this.props.title ? this.props.title.toUpperCase() : ""}
            </Text>
          </View>
        </TouchableNativeFeedback>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  default: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#fff",
    borderTopWidth: 1,
    backgroundColor: "#025AAE"
  },
  fontStyle: {
    color: "#fff",
    fontSize: 30,
    paddingLeft: 10
  }
});
