import React, { Component } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  StatusBar
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
    status: false
  };

  generatePassword = () => {
    const password = generator.generate({
      length: 10,
      numbers: true
    });

    this.props.navigation.navigate("screen2", { password });
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
            tintColor={accentColor}
          />

          <View
            style={styles.bottom}
            animation="slideInUp"
            duration={300}
            delay={200}
          >
            <View style={styles.insideContainer}>
              <Button
                raised
                accent
                text="Generate Password"
                // onPress={() => this.setState({ status: !this.state.status })}
                onPress={this.generatePassword}
              />

              <View style={styles.divider} />

              <Button
                raised
                accent
                text="Select Option"
                onPress={() => this.setState({ status: !this.state.status })}
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
    backgroundColor: "white"
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 30
  },
  bottom: {
    flex: 2,
    backgroundColor: uiTheme.palette.primaryColor
  },
  insideContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: DEVICE_WIDTH * 0.15,
    paddingVertical: DEVICE_HEIGHT * 0.25
  },

  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    marginVertical: 10
  }
});