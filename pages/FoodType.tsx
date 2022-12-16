import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import foodtypedata from "../data/foodtypedata";

const types = foodtypedata;

const FoodType = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View key={index} style={styles.productview}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.producttext}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodType;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: { width: 60, height: 60, borderRadius: 30 },
  productview: {
    margin: 5,
  },
  producttext: {
    marginTop: 6,
    textAlign: "center",
  },
});
