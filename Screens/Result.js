import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, IconToggle } from "react-native-material-ui";
import { View, Text, Image } from "react-native-animatable";
import { Transition } from "react-navigation-fluid-transitions";

import imgLogo from "../assets/lock.png";
import uiTheme from "../theme";

import {
  IS_ANDROID,
  ANDROID_STATUSBAR,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  IMAGE_WIDTH,
} from "../utils/dimensions";

class Result extends Component {
  render() {
    const { password } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Transition shared="logo">
            <Image style={styles.logoImg} source={imgLogo} animation="fadeIn" />
          </Transition>
        </View>

        <View
          style={styles.bottom}
          animation="slideInUp"
          duration={300}
          delay={200}
        >
          <View style={styles.insideContainer}>
            <Card>
              <View style={styles.resultContainer}>
                <Text style={styles.text}>{password}</Text>
                <IconToggle name="content-copy" />
              </View>
            </Card>

            <Button
              raised
              text="Back"
              accent
              onPress={() => this.props.navigation.goBack()}
            />
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
    marginVertical: 30,
  },

  logoImg: {
    height: IMAGE_WIDTH / 2,
    width: IMAGE_WIDTH / 2,
    resizeMode: "contain",
    tintColor: uiTheme.palette.accentColor,
  },

  bottom: {
    flex: 4,
    backgroundColor: uiTheme.palette.primaryColor,
  },

  insideContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: DEVICE_WIDTH * 0.15,
    paddingVertical: DEVICE_HEIGHT * 0.25,
  },

  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  text: {},
});

export default Result;
