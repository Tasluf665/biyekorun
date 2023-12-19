import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constant/Colors";

export default function PasswordInput({ setPassword, password }) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.passwordInputcontainer}>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.TextInput}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color={Colors.Gray}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  passwordInputcontainer: {
    backgroundColor: Colors.LightGray,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: "3%",
  },
  TextInput: {
    paddingVertical: "3%",
    color: Colors.Gray,
    width: "92%",
  },
});
