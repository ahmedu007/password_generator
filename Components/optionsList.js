import React, { Component } from "react";
import propTypes from "prop-types";
import { Switch } from "react-native";
import { View } from "react-native-animatable";
import { ListItem } from "react-native-material-ui";
import uiTheme from "../theme";

class List extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    handleSwitch: propTypes.func.isRequired,
  };

  state = {
    value: this.props.value,
  };

  handleSwitch = value =>
    this.setState({ value }, () =>
      this.props.handleSwitch(this.props.title, value)
    );

  render() {
    const { title } = this.props;
    return (
      <View style={{ paddingTop: 25 }}>
        <ListItem
          style={{
            container: {
              backgroundColor: uiTheme.palette.accentColor,
              borderRadius: 5,
            },
            primaryText: { color: "white" },
          }}
          divider
          centerElement={{
            primaryText: title ? title.toUpperCase() : null,
          }}
          onPress={() => {}}
          rightElement={
            <Switch
              value={this.state.value}
              onValueChange={this.handleSwitch}
            />
          }
        />
      </View>
    );
  }
}

export default List;
