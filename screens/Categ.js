import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class Categ extends React.Component {
  state = {
    "switch-1": true,
    "switch-2": false
  };

  toggleSwitch = switchId =>
    this.setState({ [switchId]: !this.state[switchId] });

  renderButtons = () => {
    return (
      <Block flex>
        <Text center bold size={16} style={styles.title}>
          Categories
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block center>
            <Button color="default" style={styles.button}>
              Math
            </Button>
          </Block>
          <Block center>
            <Button color="error" style={styles.button}>
              Sciences
            </Button>
          </Block>
          <Block center>
            <Button style={styles.button}>Law and philosophy</Button>
          </Block>
          <Block center>
            <Button color="info" style={styles.button}>
              Literature
            </Button>
          </Block>
          <Block center>
            <Button color="success" style={styles.button}>
              Languages
            </Button>
          </Block>
          <Block center>
            <Button color="warning" style={styles.button}>
              History
            </Button>
          </Block>
          <Block center>
            <Button color="error" style={styles.button}>
              Geography
            </Button>
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {this.renderButtons()}
        </ScrollView>
      </Block>
    );
  }
};

  const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 44,
      color: argonTheme.COLORS.HEADER
    },
    group: {
      paddingTop: theme.SIZES.BASE * 2
    },
    shadow: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.2,
      elevation: 2
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: width - theme.SIZES.BASE * 2
    },
    optionsButton: {
      width: "auto",
      height: 34,
      paddingHorizontal: theme.SIZES.BASE,
      paddingVertical: 10
    },
    input: {
      borderBottomWidth: 1
    },
    inputDefault: {
      borderBottomColor: argonTheme.COLORS.PLACEHOLDER
    },
    inputTheme: {
      borderBottomColor: argonTheme.COLORS.PRIMARY
    },
    inputTheme: {
      borderBottomColor: argonTheme.COLORS.PRIMARY
    },
    inputInfo: {
      borderBottomColor: argonTheme.COLORS.INFO
    },
    inputSuccess: {
      borderBottomColor: argonTheme.COLORS.SUCCESS
    },
    inputWarning: {
      borderBottomColor: argonTheme.COLORS.WARNING
    },
    inputDanger: {
      borderBottomColor: argonTheme.COLORS.ERROR
    },
    social: {
      width: theme.SIZES.BASE * 3.5,
      height: theme.SIZES.BASE * 3.5,
      borderRadius: theme.SIZES.BASE * 1.75,
      justifyContent: "center"
    },
  });
  

export default Categ;
