import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, FlatList } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { Theme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
import Categories from '../constants/categories';

const { width } = Dimensions.get("screen");

class FindBooks extends React.Component {
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
        <FlatList
            data={Categories}
            renderItem={({ item }) => (
                <Block center>
                <Button color="default" style={styles.button}>
                  {item.cat}
                </Button>
              </Block>
            )}
            keyExtractor={item => item.id}
        />
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
      color: Theme.COLORS.HEADER
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
      borderBottomColor: Theme.COLORS.PLACEHOLDER
    },
    inputTheme: {
      borderBottomColor: Theme.COLORS.PRIMARY
    },
    inputTheme: {
      borderBottomColor: Theme.COLORS.PRIMARY
    },
    inputInfo: {
      borderBottomColor: Theme.COLORS.INFO
    },
    inputSuccess: {
      borderBottomColor: Theme.COLORS.SUCCESS
    },
    inputWarning: {
      borderBottomColor: Theme.COLORS.WARNING
    },
    inputDanger: {
      borderBottomColor: Theme.COLORS.ERROR
    },
    social: {
      width: theme.SIZES.BASE * 3.5,
      height: theme.SIZES.BASE * 3.5,
      borderRadius: theme.SIZES.BASE * 1.75,
      justifyContent: "center"
    },
  });
  

export default FindBooks;
