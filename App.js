import React, { Component } from "react";

import { FluidNavigator } from "react-navigation-fluid-transitions";

import Options from "./Screens/Options";
import Home from "./Screens/Homepage";

export default (Navigator = FluidNavigator({
  screen1: { screen: Home },
  screen2: { screen: Options }
}));
