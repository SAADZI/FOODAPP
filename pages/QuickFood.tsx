import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import foodtypedata from "../data/foodtypedata";
const QuickFood = () => {
  const data = foodtypedata;
  return (
    <View style={styles.container}>
      <Text style={styles.quickfoodtxt}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable  key={index}>
           <View style={{borderRadius:20,}}>
           <ImageBackground
              style={styles.quickimage}
              source={{ uri: item.image }}
            >
              <Text style={styles.offertxt}>{item.offer} OFF</Text>
            </ImageBackground>
           </View>
            <Text style={styles.nametxt}>{item.name}</Text>
            <View style={styles.afterimagecontent}>
              <Entypo
                name="star"
                size={24}
                color="green"
                style={styles.afterimagecontentmargin}
              />
              <Text style={styles.afterimagecontentmargin}>{item.rating}</Text>
              <Text style={styles.afterimagecontentmargin}>.</Text>
              <Text style={styles.afterimagecontentmargin}>
                {item.time} mins
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  quickfoodtxt: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 8,
  },
  quickimage: {
    aspectRatio: 5 / 6,
    height: 170,
    margin: 10,
    borderRadius: 100,
  },

  offertxt: {
    position: "absolute",
    bottom: 10,
    left: 12,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  nametxt: {
    left: 12,
    fontSize: 15,
    fontWeight: "bold",
  },
  afterimagecontent: {
    flexDirection: "row",
    alignItems: "center",
  },
  afterimagecontentmargin: {
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
});
