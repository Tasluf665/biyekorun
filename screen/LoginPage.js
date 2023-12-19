import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ScaledSheet, scale } from "react-native-size-matters";

import Colors from "../constant/Colors";
import LogoContainer from "../components/AuthScreens/LogoContainer";
import InputTitle from "../components/AuthScreens/InputTitle";
import CustomeInput from "../components/AuthScreens/CustomeInput";
import PasswordInput from "../components/AuthScreens/PasswordInput";
import GradientButton from "../components/AuthScreens/GradientButton";
import SvgComponent from "../components/AuthScreens/SvgComponent";

export default function LoginPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <LogoContainer style={{ marginTop: "10%" }} />

      <Text style={styles.headingText}>Welcome Back!</Text>
      <Text style={styles.text}>Please sign in your Account</Text>

      <View style={styles.inputContainer}>
        <InputTitle title="Email" />
        <CustomeInput setText={setEmail} text={email} />
      </View>

      <View style={styles.inputContainer}>
        <InputTitle title="Password" />
        <PasswordInput setPassword={setPassword} password={password} />
      </View>

      <TouchableOpacity style={styles.recoveryContainer} activeOpacity={0.6}>
        <Text style={styles.text}>Forgot Password? Recover Now!</Text>
      </TouchableOpacity>

      <GradientButton title="Sign In" />

      <TouchableOpacity style={styles.newAccountContainer} activeOpacity={0.6}>
        <Text style={styles.newAccountText}>New to Biye Korun?</Text>
        <SvgComponent width={scale(120)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "2%",
  },
  text: {
    color: Colors.Gray,
    marginTop: "2%",
  },

  inputContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: "6%",
  },

  recoveryContainer: {
    width: "100%",
    paddingHorizontal: "6.5%",
    marginTop: 6,
  },
  newAccountContainer: {
    width: "100%",
    marginTop: "6%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  newAccountText: {
    color: Colors.Gray,
    marginRight: 10,
    paddingBottom: 3,
  },
});
