import React, { Component } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager
} from "react-native";
import { Image, View } from "react-native-animatable";
import { Button } from "react-native-material-ui";
import imgLogo from "./assets/lock.png";

const IS_ANDROID = Platform.OS === "android";
const { height, width } = Dimensions.get("window");

const ANDROID_STATUSBAR = 24;
const DEVICE_HEIGHT = IS_ANDROID ? height - ANDROID_STATUSBAR : height;
const DEVICE_WIDTH = width;

const IMAGE_WIDTH = DEVICE_WIDTH * 0.8;

if (IS_ANDROID) UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  state = {
    visibleForm: false
  };

  render() {
    const { visibleForm } = this.state;
    const formStyle = !visibleForm ? { height: 0 } : { marginTop: 40 };
    return (
      <View style={styles.container}>
        <Image
          animation={"bounceIn"}
          duration={1200}
          delay={200}
          ref={ref => (this.logoImgRef = ref)}
          style={styles.logoImg}
          source={imgLogo}
        />

        <KeyboardAvoidingView
          keyboardVerticalOffset={-100}
          behavior={"padding"}
          style={[formStyle, styles.bottom]}
        >
          <Button text="Generate Password" />
        </KeyboardAvoidingView>
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
    backgroundColor: "#1976D2"
  }
});
