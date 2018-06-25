import React, { Component } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  StatusBar,
} from "react-native";
import { Image, View } from "react-native-animatable";
import { Button, ThemeProvider, COLOR } from "react-native-material-ui";

import generator from "../utils/passwordGenerator";
import imgLogo from "../assets/lock.png";
import uiTheme from "../theme";

const IS_ANDROID = Platform.OS === "android";
const { height, width } = Dimensions.get("window");

const ANDROID_STATUSBAR = 24;
const DEVICE_HEIGHT = IS_ANDROID ? height - ANDROID_STATUSBAR : height;
const DEVICE_WIDTH = width;

const IMAGE_WIDTH = DEVICE_WIDTH * 0.65;

if (IS_ANDROID) UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Home extends Component {
  state = {
    visibleForm: true,
    status: false,

    length: 10,
    numbers: true,
    symbols: false,
    uppercase: true,
    similarChars: false,
  };

  generatePassword = () => {
    const { length, numbers, symbols, uppercase, similarChars } = this.state;
    const password = generator.generate({
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilarCharacters: similarChars,
    });

    this.props.navigation.navigate("screen3", { password });
  };

  handleOptions = (option, value) => {
    this.setState({ [option]: value });
  };

  render() {
    const { visibleForm } = this.state;
    const formStyle = !visibleForm ? { height: 0 } : { marginTop: 40 };
    const { accentColor } = uiTheme.palette;
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLOR.green500}
            hidden={this.state.status}
            showHideTransition="slide"
            barStyle="dark-content"
            translucent
          />
          <Image
            animation={"bounceIn"}
            duration={1200}
            delay={200}
            ref={ref => (this.logoImgRef = ref)}
            style={styles.logoImg}
            source={imgLogo}
          />

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

              <View animation={"zoomIn"} delay={800} duration={400}>
                <Button
                  raised
                  accent
                  text="Select Option"
                  onPress={() =>
                    this.props.navigation.navigate("screen2", {
                      handleOptions: this.handleOptions,
                    })
                  }
                />
              </View>
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
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 30,
    tintColor: uiTheme.palette.accentColor,
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
