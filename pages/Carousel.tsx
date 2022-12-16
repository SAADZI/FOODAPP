import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const images = [
  "https://media.istockphoto.com/id/914886270/photo/close-up-of-fresh-flame-grilled-burgers-displayed-in-a-row-at-food-market.jpg?s=612x612&w=0&k=20&c=1VRmkqCgFr6Wn8KHG3KPTQYu1kZy1SvFFYUakmrkVlI=",
  "https://mysecretbakes.com/wp-content/uploads/2021/08/41F2B2D0-B607-4C72-ADBB-DC736EFEFE30-scaled.jpeg",
  "https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2ea67b471327a1d82959b_chicken%20roll_1500%20x%201200.jpg",
];

const Carousel = () => {
  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        autoplayInterval={2000}
        circleLoop
        dotColor="black"
        inactiveDotColor="white"
        ImageComponentStyle={{
          borderRadius: 15,
        }}
      />
    </View>
  );
};
export default Carousel;
