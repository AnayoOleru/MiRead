import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import Categ from "../screens/Categ";
import Library from "../screens/Library";
import Uploads from "../screens/Uploads";
import Login from "../screens/Login";
import Recent from "../screens/Recent";
import Search from "../screens/Search";
import MyLibrary from "../screens/MyLibrary";
import FindBooks from '../screens/FindBooks';
import Events from "../screens/Events";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/contactUs";
import ThankYou from "../screens/ThankYou";

// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ElementsStack = createStackNavigator({
  Elements: {
    screen: Elements,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Elements" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const CategStack = createStackNavigator({
  Categ: {
    screen: Categ,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Categ" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const FindBooksStack = createStackNavigator({
  FindBooks: {
    screen: FindBooks,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Find Books by Category" navigation={navigation} />
    })
  },
  transitionConfig
})

const ContactUsStack = createStackNavigator({
  ContactUs: {
    screen: ContactUs,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Contact" navigation={navigation} />
    })
  },
  transitionConfig
})

const AboutUsStack = createStackNavigator({
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="About" navigation={navigation} />
    })
  },
  transitionConfig
})

const AccountStack = createStackNavigator({
  Categ: {
    screen: Categ,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Categ" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const LibraryStack = createStackNavigator({
  Library: {
    screen: Library,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Library" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const EventStack = createStackNavigator({
  Events: {
    screen: Events,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Events" navigation={navigation} />
    })
},
  transitionConfig
});

const MyLibraryStack = createStackNavigator({
  MyLibrary: {
    screen: MyLibrary,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="MyLibrary" navigation={navigation} />
    })
  }
})

const UploadsStack = createStackNavigator({
  Uploads: {
    screen: Uploads,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="My Uploads" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Home" navigation={navigation} />
      })
    },

    Recent: {
      screen: Recent,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Recent" navigation={navigation} />
      })
    },
    
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Recent" navigation={navigation} />
      })
    },
    Pro: {
      screen: Pro,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    },
    ThankYou: {
      screen: ThankYou,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);
// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Home" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Profile" />
        )
      })
    },
    MyLibrary: {
      screen: MyLibraryStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="MyLibrary" title="My Library" />
        )
      })
    },
    FindBooks: {
      screen: FindBooksStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Categ" title="Find Books" />
        )
      })
    },
    Events: {
      screen: EventStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Events" title="Events" />
        )
      })
    },
    About: {
      screen: AboutUsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="AboutUs" title="About" />
        )
      })
    },
    Contact: {
      screen: ContactUsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="ContactUs" title="Contact" />
        )
      })
    },
    Login: {
      screen: Login,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Login" title="Login" />
        )
      })
    },
    Account: {
      screen: Register,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Account" />
        )
      })
    },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
