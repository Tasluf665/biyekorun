import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../constant/Colors";
import LogoContainer from "../components/AuthScreens/LogoContainer";
import InputTitle from "../components/AuthScreens/InputTitle";
import CustomeInput from "../components/AuthScreens/CustomeInput";
import GradientButton from "../components/AuthScreens/GradientButton";

export default function ResetPassPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [confirmPassword, setConfirmPassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <LogoContainer style={{ marginTop: "10%" }} />

      <Text style={styles.headingText}>Reset Password</Text>
      <Text style={styles.text}>
        No worries, we’ll send you reset instraction
      </Text>

      <View style={styles.inputContainer}>
        <InputTitle title="Email" showRedStar={false} />
        <CustomeInput setText={setEmail} text={email} />
      </View>

      <View style={styles.inputContainer}>
        <InputTitle title="Password" showRedStar={false} />
        <CustomeInput
          setText={setPassword}
          text={password}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputTitle title="Confirm Password" showRedStar={false} />
        <CustomeInput
          setText={setConfirmPassword}
          text={confirmPassword}
          secureTextEntry={true}
        />
      </View>

      <GradientButton title="Reset Password" />

      <TouchableOpacity style={styles.newAccountContainer} activeOpacity={0.6}>
        <AntDesign name="arrowleft" size={20} color={Colors.Gray} />
        <Text style={styles.newAccountText}>Back to log In</Text>
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
  text: {
    color: Colors.Gray,
    marginTop: "2%",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: "6%",
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
