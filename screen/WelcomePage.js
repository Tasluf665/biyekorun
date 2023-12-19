import { Text, View, Image } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";

import GradientButton from "../components/GradientButton";
import Colors from "../constant/Colors";
import GradientTextButton from "../components/GradientTextButton";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/AppImage/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../assets/AppImage/marriage.png")}
        style={styles.marriageImg}
      />
      <Text style={styles.text}>
        By tapping “Login” or “Sing in”, you agree to our Terms. Learn how we
        process your data in our Privacy Policy and Cookies Policy
      </Text>

      <GradientButton title="Sign In" />
      <GradientTextButton title="Create an Account" onPress={() => {}} />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: "100@s",
    height: "100@vs",
    resizeMode: "contain",
  },
  marriageImg: {
    width: "270@s",
    height: "290@vs",
    resizeMode: "contain",
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    marginTop: "15@vs",
  },
  text: {
    textAlign: "center",
    marginHorizontal: "5%",
    marginTop: "10%",
    color: Colors.Gray,
  },
});
