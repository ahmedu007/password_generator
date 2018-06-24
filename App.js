import { createStackNavigator } from "react-navigation";

import Options from "./Screens/Options";
import Home from "./Screens/Homepage";
import Result from "./Screens/Result";

export default (Navigator = createStackNavigator(
  {
    screen1: { screen: Home },
    screen2: { screen: Options },
    screen3: { screen: Result }
  },
  {
    headerMode: "none"
  }
));
