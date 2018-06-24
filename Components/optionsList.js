import React, { Component } from "react";
import propTypes from "prop-types";
import { Switch } from "react-native";
import { View } from "react-native-animatable";
import { ListItem } from "react-native-material-ui";

const List = ({ title, handleSwitch }) => (
  <View style={{ paddingTop: 25 }}>
    <ListItem
      divider
      centerElement={{
        primaryText: title ? title.toUpperCase() : null
      }}
      onPress={() => {}}
      rightElement={<Switch />}
      onRightElementPress={handleSwitch}
    />
  </View>
);

List.propTypes = {
  title: propTypes.string,
  handleSwitch: propTypes.func
};

export default List;
