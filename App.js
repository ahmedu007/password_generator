import { createStackNavigator } from "react-navigation";
import { createFluidNavigator } from "react-navigation-fluid-transitions";

import Options from "./Screens/Options";
import Home from "./Screens/Homepage";
import Result from "./Screens/Result";

// export default (Navigator = createStackNavigator(
export default (Navigator = createFluidNavigator(
  {
    screen1: { screen: Home },
    screen2: { screen: Options },
    screen3: { screen: Result },
  },
  {
    headerMode: "none",
  }
));
