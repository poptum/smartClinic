//componente para criação de um painel do tipo colapse, recebe um titulo, uma data e uma cor de fundo como props (title, date, bgColor)
//*Chamada da seguinte forma*
//<Panel title="Denúncia realizada " date={date} bgColor={"#c24040"}>
//  <Text>Lorem ipsum dolor sit amet...</Text>
//</Panel>
// Qualquer elemento entre a tag Panel será exibido ao abrir o colapse (corresponde ao this.props.children)
//@flow
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Animated,
  Text,
  Image
} from "react-native"; //Step 1
import React, { PureComponent } from "react";
// import SvgUri from "react-native-svg-uri";
import upArrow from "../assets/up_arrow.png";
import downArrow from "../assets/down_arrow.png";

type Props = {
  navigator: any,
  dispatch: any,
  title: string,
  date: Date,
  bgColor: string,
  item: any
};

type State = {
  date: Date,
  expanded: boolean,
  panelStyle: any,
  titleStyle: any,
  fontStyle: any,
  maxHeight?: any,
  minHeight?: any,
  animation?: any
};

export default class Panel extends PureComponent<Props, State> {
  icons: any;

  constructor(props: Props) {
    super(props);

    this.icons = {
      up: upArrow,
      down: downArrow
    };

    this.state = {
      // date: moment(props.date).format("DD/MM/YYYY HH:mm:ss"),
      expanded: false,
      panelStyle: this.retornaStyle(),
      titleStyle: styles.titleClosed,
      fontStyle: styles.fontClosed
    };
  }

  retornaStyle = () => {
    let newStyle = {
      marginBottom: 5,
      backgroundColor: this.props.bgColor,
      overflow: "hidden"
    };
    return newStyle;
  };

  retornaHeaderStyle = () => {
    let newStyle = {
      flex: 0.8,
      padding: 10,
      fontSize: 25,
      color: this.props.bgColor
    };
    return newStyle;
  };

  toggle = () => {
    let panelStyle = styles.panelOpen;
    let fontStyle = styles.fontOpen;
    let titleStyle = this.retornaHeaderStyle();
    let initialValue = this.state.minHeight;
    let finalValue = this.state.maxHeight + this.state.minHeight;
    if (this.state.expanded) {
      panelStyle = this.retornaStyle();
      fontStyle = styles.fontClosed;
      titleStyle = styles.titleClosed;
      initialValue = this.state.maxHeight + this.state.minHeight;
      finalValue = this.state.minHeight;
    }

    this.setState(
      {
        expanded: !this.state.expanded, //Step 2
        panelStyle,
        fontStyle,
        titleStyle
      },
      () => {
        this.state.animation.setValue(initialValue); //Step 3
        Animated.spring(
          //Step 4
          this.state.animation,
          {
            toValue: finalValue
          }
        ).start(); //Step 5
      }
    );
  };

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
      animation: new Animated.Value(event.nativeEvent.layout.height)
    });
  }

  render() {
    let icon = this.icons["up"];

    if (this.state.expanded) {
      icon = this.icons["down"]; //Step 4
    }

    //Step 5
    return (
      <Animated.View
        style={[this.state.panelStyle, { height: this.state.animation }]}
      >
        <View style={this.state.panelStyle}>
          <View
            style={styles.titleContainer}
            onLayout={this._setMinHeight.bind(this)}
          >
            <TouchableNativeFeedback
              style={styles.button}
              onPress={this.toggle}
              underlayColor="#f1f1f1"
            >
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "rgba(112, 112, 112, 0.1)",
                  borderWidth: 1,
                  height: 50,
                  width: 50,
                  borderRadius: 100
                }}
              >
                <Image style={{ width: 30, height: 25 }} source={icon} />
              </View>
            </TouchableNativeFeedback>
            <Text style={this.state.titleStyle}>{this.props.title}</Text>
            <View style={{ flex: 0.4 }}>
              <Text style={this.state.fontStyle}>{this.state.date}</Text>
            </View>
          </View>
          <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
            {this.props.children}
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  panelClosed: {
    backgroundColor: "#c24040",
    overflow: "hidden"
  },
  panelOpen: {
    backgroundColor: "#fff",
    overflow: "hidden"
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingLeft: 15,
    paddingTop: 15,
    flexDirection: "row"
  },
  titleClosed: {
    flex: 0.8,
    padding: 10,
    fontSize: 25,
    color: "#fff"
  },

  fontClosed: {
    color: "#fff"
  },
  fontOpen: {
    color: "#000000"
  },
  button: {
    height: 200
  },
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {}
});
