import React from "react";
import { StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Recent extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <Block flex>
            <Block flex row>
              <Card
                bookImage={item.image}
                bookTitle={item.title}
                bookCTA={item.cta}
                style={{ marginRight: theme.SIZES.BASE }}
              />
                <Card
                bookImage={item.image}
                bookTitle={item.title}
                bookCTA={item.cta}
                // style={{ marginRight: theme.SIZES.BASE }}
              />
              {/* <Card item={articles[2]} /> */}
            </Block>
          </Block>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE
  }
});

export default Recent;
