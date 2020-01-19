import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import SafeAreaView from "react-native-safe-area-view";
import backIcon from "../assets/images/left-arrow.png";
import closeIcon from "../assets/images/close.png";

const Header = props => {
  const { onBack, title, onClose } = props;
  return (
    <SafeAreaView style={styles.safeContainer}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <Image style={styles.backIcon} source={backIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}> 

      {onClose && (
        <TouchableOpacity style={styles.closeWrap} onPress={onClose}>
          <Image style={styles.backIcon} source={closeIcon} />
        </TouchableOpacity>
      )}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColor,
    paddingTop: Sizes.defaultVMargin,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },
  safeContainer: {
    backgroundColor: Colors.mainColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    paddingHorizontal: Sizes.defaultHPadding,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row"
  },
  backIcon: {
    height: Sizes.iconHeight,
    width: Sizes.iconWidth,
    marginRight: 10,
    tintColor: Colors.defaultWhite
  },
  title: {
    color: Colors.defaultWhite,
    fontSize: Sizes.h2,
    fontWeight: "500"
  },
  closeWrap:{
    alignSelf:"flex-end",
  },
  right:{
    flex:1,
  }
});

export default Header;
