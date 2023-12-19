import { StyleSheet, TextInput } from "react-native";
import React from "react";

import Colors from "../../constant/Colors";

export default function CustomeInput({
  setText,
  text,
  secureTextEntry = false,
}) {
  return (
    <TextInput
      onChangeText={(text) => setText(text)}
      value={text}
      style={styles.TextInput}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: Colors.LightGray,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: "3%",
    color: Colors.Gray,
    width: "100%",
  },
});
