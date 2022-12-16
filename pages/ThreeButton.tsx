import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ThreeButton = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Ionicons name="ios-filter-sharp" size={24} color="black" />
        <Text style={styles.buttontxt1}>Filter</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttontxt}>Sort by Rating</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttontxt}>Sort by Price</Text>
      </Pressable>
    </View>
  );
};

export default ThreeButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7f8c8d",
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    width: 110,
    margin: 15,
  },
  buttontxt: { fontWeight: "700" },
  buttontxt1: {
    marginLeft: 6,
    fontWeight: "700",
  },
});
