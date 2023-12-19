import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import WelcomePage from "./screen/WelcomePage";
import LoginPage from "./screen/LoginPage";
import ForgotPassPage from "./screen/ForgotPassPage";
import OtpPage from "./screen/OtpPage";
import ResetPassPage from "./screen/ResetPassPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WelcomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});
