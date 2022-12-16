import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "./Carousel";
import FoodType from "./FoodType";
import QuickFood from "./QuickFood";
import ListFood from "./ListFood";
import ThreeButton from "./ThreeButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.linedesign}>- - - - - - - - - - - - - - - -</Text>
          <Text style={styles.headerbar}>FOODZINO APP</Text>
          <Text style={styles.linedesign}>- - - - - - - - - - - - - - - -</Text>
        </View>

        {/* Header Search Bar */}
        <View style={styles.container}>
          <TextInput
            placeholder="Search for food  "
            style={styles.headerinput}
          />
          <AntDesign name="search1" size={24} style={styles.searchicon} />
        </View>
        {/* Header Search Bar */}
        {/* Carousel  */}
        <Carousel />
        {/* Carousel  */}

        {/* FoodType */}
        <FoodType />
        {/* FoodType */}

        {/* Get it Quikcy QuickFood */}
        <QuickFood />
        {/* Get it Quikcy QuickFood */}

        {/* ListFood */}
        <ListFood />
        {/* ListFood */}

        {/* ThreeButton  */}
        <ThreeButton />
        {/* ThreeButton  */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
    margin: 11,
    padding: 8,
    borderColor: "#660000",
    border: 10,
    borderRadius: 15,
    borderWidth: 0.3,
  },
  headerinput: {
    fontSize: 20,
  },
  searchicon: { color: "#660000" },
  header: {
    backgroundColor: "#660000",
    paddingTop: 32,

    paddingBottom: 10,
  },
  headerbar: {
    textAlign: "center",

    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  linedesign: {
    marginTop: -10,
    marginBottom: -10,
    textAlign: "center",
    fontWeight: "900",
    color: "white",
  },
});
export default HomeScreen;
