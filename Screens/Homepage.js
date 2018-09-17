import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  UIManager,
  StatusBar,
} from "react-native";
import { Image, View, Text } from "react-native-animatable";
import { Button, COLOR } from "react-native-material-ui";
import { Transition } from "react-navigation-fluid-transitions";
import LottieView from "lottie-react-native";

import generator from "../utils/passwordGenerator";
import imgLogo from "../assets/lock.png";
import uiTheme from "../theme";

const IS_ANDROID = Platform.OS === "android";
const { height, width } = Dimensions.get("window");

const ANDROID_STATUSBAR = 24;
const DEVICE_HEIGHT = IS_ANDROID ? height - ANDROID_STATUSBAR : height;
const DEVICE_WIDTH = width;

const IMAGE_WIDTH = DEVICE_WIDTH * 0.65;
const IMAGE_HEIGHT = DEVICE_HEIGHT * 0.65;

if (IS_ANDROID) UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Home extends Component {
  state = {
    status: false,
    optionsScreen: false,

    length: 10,
    numbers: true,
    symbols: false,
    uppercase: true,
    excludeSimilarCharacters: false,

    duration: 3000,
    isPlaying: true,
    isInverse: false,
    loop: true,
  };

  generatePassword = () => {
    const {
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilarCharacters,
    } = this.state;
    const password = generator.generate({
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilarCharacters,
    });

    this.props.navigation.navigate("screen3", { password });
  };

  handleOptions = (key, val) =>
    this.setState({
      [key]: val,
    });

  handleAnimationEnd = () => {
    const {
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilarCharacters,
    } = this.state;

    this.props.navigation.navigate("screen2", {
      handleOptions: this.handleOptions,
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilarCharacters,
    });
    this.setState({ optionsScreen: false });
  };

  render() {
    const { optionsScreen } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLOR.green500}
          hidden={this.state.status}
          showHideTransition="slide"
          barStyle="dark-content"
          translucent
        />
        <View style={styles.imgView}>
          <Transition shared="logo">
            <Image style={styles.logoImg} source={imgLogo} />
          </Transition>
        </View>

        <View
          style={styles.bottom}
          animation="slideInUp"
          duration={400}
          delay={200}
        >
          <View style={styles.insideContainer}>
            <View animation={"zoomIn"} delay={600} duration={400}>
              <Button
                raised
                accent
                text="Generate Password"
                onPress={this.generatePassword}
              />
            </View>

            <View
              style={styles.divider}
              animation={"zoomIn"}
              delay={700}
              duration={400}
            />

            <View
              animation={optionsScreen ? "zoomOut" : "zoomIn"}
              delay={optionsScreen ? null : 800}
              duration={400}
              onAnimationEnd={
                optionsScreen ? this.handleAnimationEnd : undefined
              }
            >
              <Button
                raised
                accent
                text="Select Option"
                onPress={() => this.setState({ optionsScreen: true })}
              />
            </View>
          </View>
        </View>
      </View>
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
    // height: null,
    // width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    width: IMAGE_WIDTH,
    tintColor: uiTheme.palette.accentColor,
    resizeMode: "contain",
  },
  bottom: {
    flex: 2,
    backgroundColor: uiTheme.palette.primaryColor,
  },
  insideContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: DEVICE_WIDTH * 0.15,
    paddingVertical: DEVICE_HEIGHT * 0.25,
  },

  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: uiTheme.palette.accentColor,
    marginVertical: DEVICE_HEIGHT * 0.1,
  },
});
