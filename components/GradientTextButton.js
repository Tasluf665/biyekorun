import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import SvgComponent from "./SvgComponent";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constant/Colors";

const GradientTextButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.contianer}
    >
      <View style={styles.button}>
        <SvgComponent width={scale(125)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  contianer: {},
  button: {
    paddingHorizontal: "82@s",
    paddingVertical: "16@vs",
    marginTop: "20@vs",
    backgroundColor: Colors.LightGray,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default GradientTextButton;
