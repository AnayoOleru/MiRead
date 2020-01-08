import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, Theme } from "../constants";

const { width, height } = Dimensions.get("screen");

class ContactUS extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.background}
          style={{ width, height, zIndex: 1 }}
        >
        <Block flex middle>
          <Block style={styles.registerContainer}>
           <ScrollView>   
              
              <Block flex>
                
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={20}>
                    Like What you see, don't send me a message through the form below
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Input
                        borderless
                        placeholder="Phone NUmber"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                    <Input
                        borderless
                        placeholder="Message"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      
                      <Block row style={styles.passwordCheck}>
                        {/* <Block row style={styles.passwordCheck}> */}
                        <Text size={12} color={Theme.COLORS.MUTED}>
                          Instead contact me:
                        </Text>
                        <Text bold size={12} color={Theme.COLORS.MiREADCOLOR}>
                          {" "}
                          anayo_oleru@outlook.com
                        </Text>
                      {/* </Block> */}
                      </Block>

                    </Block>
                    <Block middle>
                      <Button style={styles.createButton}>
                        <Text bold size={14} color={Theme.COLORS.WHITE} onPress={() => navigation.navigate("ThankYou")}>
                          SEND MESSAGE
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
                
              </Block>
              </ScrollView>
            </Block>
           
          </Block>
        </ImageBackground>
      </Block>
      
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
    paddingTop: 20
  },
  socialConnect: {
    // backgroundColor: Theme.COLORS.WHITE,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: Theme.COLORS.MiREADCOLOR,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    backgroundColor: '#f88b11',
    width: width * 0.5,
    marginTop: 25
  }
});

export default ContactUS;
