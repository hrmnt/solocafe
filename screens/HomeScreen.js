import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import icAdd from "../assets/images/add.png";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

import { MonoText } from "../components/StyledText";
import Header from "../components/Header";
import Sizes from "../constants/Sizes";

const Button = props => {
  const { title, icon, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image style={styles.buttonIcon} source={icon} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Header title={"Main menu"} />

      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.buttonWrap}>
          <Button
            onPress={() => navigation.navigate("OfferScreen")}
            icon={icAdd}
            title={"Создать заказ"}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  safeContainer: {
    flex: 1,
    paddingHorizontal: 17,
    paddingVertical: 17
  },
  buttonWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  button: {
    padding: Sizes.defaultHPadding,
    backgroundColor: Colors.mainColor,
    height: Layout.window.width / 2 - 34,
    width: Layout.window.width / 2 - 34,
    marginBottom: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonIcon: {
    tintColor: "#fff",
    width: Sizes.iconWidth * 1.2,
    height: Sizes.iconHeight * 1.2,
    marginBottom: Sizes.defaultVMargin
  },
  buttonText: {
    color: Colors.defaultWhite,
    fontSize: Sizes.h3,
    fontWeight: "500"
  }
});

export default HomeScreen;
