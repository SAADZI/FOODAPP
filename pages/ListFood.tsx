import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import foodtypedata from "../data/foodtypedata";
const ListFood = () => {
  const data = foodtypedata;
  return (
    <ScrollView>
      {data.map((item, index) => (
        <Pressable style={styles.presseble} key={index}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.nametxt}>{item.name}</Text>
            <Text style={styles.pricetxt}>Price: {item.price}</Text>
            <Entypo name="star" size={24} color="green" style={styles.icon} />
            <Text style={styles.rating}>{item.rating}</Text>
           
            <Text style={styles.timetxt}>{item.time}-mins</Text>
            <MaterialCommunityIcons name="bike-fast" size={20} color="#273c75" style={styles.bikeicon} />
            <Text style={styles.deliverytxt}>{item.delivery}</Text>
            <View style={styles.afterimagecontent}>
              <ImageBackground
                style={styles.quickimage}
                source={{ uri: item.image }}
              ></ImageBackground>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ListFood;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
 

  quickfoodtxt: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
  },

  presseble: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7f8c8d",
    marginTop: 9,
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
    marginTop: 15,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  pricetxt:{
    position:"absolute",
    marginTop:45,
    marginLeft: 10,
    fontSize: 15,
   fontWeight: "bold",
  
  },
    
  icon: {
    position: "absolute",
    marginTop: 66,
    marginLeft: 5,
    fontWeight: "900",
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
  timetxt: {
    position: "absolute",

    marginTop: 70,
    paddingLeft: 10,
    marginLeft: 50,
    fontWeight: "900",
  },

  rating: {
    marginTop: 70,
    marginLeft: 30,
    position: "absolute",
   
    fontWeight: "900",
  },
  bikeicon:{
    marginTop:95,
    marginLeft: 6,
    position: "absolute",
    fontWeight: "900",
 
  },
  deliverytxt:{
    marginTop:95,
    marginLeft:40,
    position: "absolute",
    fontWeight: "900",
 

  },
  
  quickimage: {
    aspectRatio: 5 / 6,
    height: 100,
    margin: 10,
  },

});
