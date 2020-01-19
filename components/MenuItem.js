import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuItem = props => {
  const { item, selectedArray } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text>{item.name}</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});

export default MenuItem;
