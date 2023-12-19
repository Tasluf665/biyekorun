import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../constant/Colors";

export default function InputTitle({ title, style, showRedStar = true }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.text}>{title}</Text>
      {showRedStar ? (
        <Text style={{ color: "red", marginLeft: 5 }}>*</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 5,
  },
  text: {
    fontSize: 15,
    color: Colors.Gray,
    fontWeight: "700",
  },
});
