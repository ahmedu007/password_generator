import React from "react";
import { createStackNavigator } from "react-navigation";
import { createFluidNavigator } from "react-navigation-fluid-transitions";
import { ThemeContext, getTheme } from "react-native-material-ui";
import uiTheme from "./theme";

import Options from "./Screens/Options";
import Home from "./Screens/Homepage";
import Result from "./Screens/Result";

// export default (Navigator = createStackNavigator(
const Navigator = createFluidNavigator(
  {
    screen1: { screen: Home },
    screen2: { screen: Options },
    screen3: { screen: Result },
  },
  {
    headerMode: "none",
  }
);

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Navigator />
      </ThemeContext.Provider>
    );
  }
}
