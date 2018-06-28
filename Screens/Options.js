import React, { Component } from "react";
import { StyleSheet, Switch, ScrollView, Platform } from "react-native";
import { Button, ThemeProvider } from "react-native-material-ui";
import { View, Image } from "react-native-animatable";
import { Transition } from "react-navigation-fluid-transitions";

import List from "../Components/optionsList";
import imgLogo from "../assets/lock.png";
import uiTheme from "../theme";

import {
  IS_ANDROID,
  ANDROID_STATUSBAR,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  IMAGE_WIDTH,
} from "../utils/dimensions";

class Options extends Component {
  state = {
    options: [
      { title: "numbers", handler: this.handleNumbers },
      { title: "symbols", handler: this.handleSymbols },
      { title: "uppercase", handler: this.handleUpperCase },
      { title: "excludeSimilarCharacters", handler: this.handleSimilarChars },
    ],
  };

  handleNumbers = status =>
    this.props.navigation.state.params.handleOptions("numbers", status);

  handleSymbols = status =>
    this.props.navigation.state.params.handleOptions("symbols", status);

  handleUpperCase = status =>
    this.props.navigation.state.params.handleOptions("uppercase", status);

  handleSimilarChars = status =>
    this.props.navigation.state.params.handleOptions("similarChars", status);

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <View style={styles.imgView}>
            <Transition shared="logo">
              <Image style={styles.logoImg} source={imgLogo} />
            </Transition>
          </View>

          <View
            style={styles.bottom}
            animation="slideInUp"
            duration={300}
            delay={200}
          >
            <View style={styles.insideContainer}>
              <ScrollView>
                {this.state.options.map(({ title, handler }, index) => (
                  <View
                    key={index}
                    animation="zoomIn"
                    delay={Platform.OS === "ios" ? 200 * index : 350 * index}
                    duration={300}
                  >
                    <List title={title} handleSwitch={handler} />
                  </View>
                ))}
              </ScrollView>

              <Button
                raised
                text="Back"
                accent
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: "white",
  },
  imgView: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  logoImg: {
    height: IMAGE_WIDTH / 2,
    width: IMAGE_WIDTH / 2,
    resizeMode: "contain",
    tintColor: uiTheme.palette.accentColor,
  },
  bottom: {
    flex: 2.5,
    backgroundColor: uiTheme.palette.primaryColor,
  },
  insideContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: DEVICE_WIDTH * 0.15,
    paddingBottom: DEVICE_HEIGHT * 0.07,
  },
});

export default Options;
