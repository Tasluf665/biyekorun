import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constant/Colors";

const GradientButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.contianer}
    >
      <LinearGradient
        colors={[Colors.GradientColor1, Colors.GradientColor2]}
        style={styles.button}
        start={{ x: 0, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  button: {
    borderRadius: 50,
    paddingHorizontal: "120@s",
    paddingVertical: "13@vs",
    marginTop: "25@vs",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GradientButton;
