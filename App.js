import { createStackNavigator } from "react-navigation";

import Options from "./Screens/Options";
import Home from "./Screens/Homepage";

export default (Navigator = createStackNavigator(
  {
    screen1: { screen: Home },
    screen2: { screen: Options }
  },
  {
    headerMode: "none"
  }
));
