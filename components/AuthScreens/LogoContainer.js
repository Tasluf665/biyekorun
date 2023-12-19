import { StyleSheet, View, Image } from "react-native";
import React from "react";

export default function LogoContainer({ style }) {
  return (
    <View style={{ ...styles.logoContainer, ...style }}>
      <Image
        source={require("../../assets/AppImage/logo2.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    height: "10%",
  },
  logo: {
    width: "auto",
    height: "95%",
    resizeMode: "contain",
  },
});
