import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import Theme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={10}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
      case "Authors":
        return (
          <Icon
            name="map-big"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
        case "About":
          return (
            <Icon
              name="map-big"
              family="ArgonExtra"
              size={12}
              color={focused ? "white" : Theme.COLORS.ICON}
            />
          );
      case "Components":
        return (
          <Icon
            name="map-big"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
      case "Articles":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
      case "My Library":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
            />
        );
      case "Events":
        return (
            <Icon
              name="spaceship"
              family="ArgonExtra"
              size={12}
              color={focused ? "white" : Theme.COLORS.ICON}
              />
          );  
      case "Profile":
        return (
          <Icon
            name="chart-pie-35"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
      case "Account":
        return (
          <Icon
            name="calendar-date"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
      case "Login":
        return (
          <Icon
            name="calendar-date"
            family="ArgonExtra"
            size={12}
            color={focused ? "white" : Theme.COLORS.ICON}
          />
        );
        case "Find Books":
          return (
            <Icon
              name="calendar-date"
              family="ArgonExtra"
              size={12}
              color={focused ? "white" : Theme.COLORS.ICON}
            />
          );
        case "Contact":
          return (
            <Icon
              name="calendar-date"
              family="ArgonExtra"
              size={12}
              color={focused ? "white" : Theme.COLORS.ICON}
            />
          );
      case "Getting Started":
        return <Icon />;
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            size={15}
            bold={focused ? true : false}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14
  },
  activeStyle: {
    backgroundColor: Theme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
