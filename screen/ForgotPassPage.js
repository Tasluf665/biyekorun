import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import LogoContainer from "../components/AuthScreens/LogoContainer";
import InputTitle from "../components/AuthScreens/InputTitle";
import CustomeInput from "../components/AuthScreens/CustomeInput";
import GradientButton from "../components/AuthScreens/GradientButton";
import Colors from "../constant/Colors";

export default function ForgotPassPage() {
  const [email, setEmail] = React.useState(null);
  return (
    <View style={styles.container}>
      <LogoContainer style={{ marginTop: "10%" }} />

      <Text style={styles.headingText}>Forget Password</Text>

      <View style={styles.inputContainer}>
        <InputTitle title="Email" />
        <CustomeInput setText={setEmail} text={email} />
      </View>

      <GradientButton title="Get OTP" />

      <TouchableOpacity style={styles.newAccountContainer} activeOpacity={0.6}>
        <AntDesign name="arrowleft" size={20} color={Colors.Gray} />
        <Text style={styles.newAccountText}>Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "2%",
  },

  inputContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: "12%",
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
    marginLeft: 5,
  },
});
