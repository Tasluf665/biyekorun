import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { LinearTextGradient } from "react-native-text-gradient";

import Colors from "../constant/Colors";

const GradientTextButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.contianer}
    >
      <LinearTextGradient
        style={{ fontWeight: "bold", fontSize: 72 }}
        locations={[0, 1]}
        colors={["red", "blue"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearTextGradient>
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

export default GradientTextButton;
