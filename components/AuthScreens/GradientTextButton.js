import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import SvgComponent from "./SvgComponent";

import Colors from "../../constant/Colors";

const GradientTextButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.contianer}
    >
      <View style={styles.button}>
        <SvgComponent width={scale(130)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  contianer: {
    width: "100%",
    height: "6%",
    marginTop: "25@vs",
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    width: "85%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.LightGray,
  },
});

export default GradientTextButton;
