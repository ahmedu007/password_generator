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
import { Button, COLOR, ThemeProvider } from "react-native-material-ui";
import { View, Text, Image } from "react-native-animatable";

import imgLogo from "../assets/lock.png";
import uiTheme from "../theme";

import {
  IS_ANDROID,
  ANDROID_STATUSBAR,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  IMAGE_WIDTH
} from "../utils/dimensions";

class Options extends Component {
  render() {
    const { accentColor } = uiTheme.palette;
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
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
    backgroundColor: "white"
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH / 2,
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
  }
});

export default Options;
