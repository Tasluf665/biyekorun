import { Text, View, Image } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";

import Colors from "../constant/Colors";
import LogoContainer from "../components/AuthScreens/LogoContainer";
import GradientButton from "../components/AuthScreens/GradientButton";
import GradientTextButton from "../components/AuthScreens/GradientTextButton";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <LogoContainer />
      <View style={styles.marriageImgContianer}>
        <Image
          source={require("../assets/AppImage/marriage2.png")}
          style={styles.marriageImg}
        />
      </View>

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
  marriageImgContianer: {
    width: "75%",
    height: "42%",
    marginTop: "4%",
  },
  marriageImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
  },
  text: {
    textAlign: "center",
    marginHorizontal: "4.5%",
    marginTop: "10%",
    color: Colors.Gray,
  },
});
