import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, Linking, SafeAreaView } from "react-native";
import CustomButton from "../components/CustomButton";

import LottieView from "lottie-react-native";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const ProfileCompleted = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View>


      </View>

      <LottieView source={require("../../assets/81544-rolling-check-mark.json")}
                  autoPlay loop={false}
                  style={{ width: 268, height: 263 }} />

      <Text style={{
        width: w - 45,
        textAlign: "center",
        lineHeight: 29.11,
        fontSize: 24,
        fontWeight: "500",
        letterSpacing: 0.1,
        color: "black",

      }}>Profile Completed!</Text>
      <Text style={{
        width: w - 45,
        textAlign: "center",
        lineHeight: 22.4,
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0.1,
        marginVertical: 20,
        color: "black",

      }}>Dear user your profile has been completed successfully. Click on the button below to choose your sector and
        apply for benefits</Text>

      <CustomButton
        title={"Continue"}
        containerStyle={{
          backgroundColor: "#6B57EB",
          marginVertical: 30,
        }}
        onPress={() => {
          navigation.navigate("GetStarted");
        }}
        textContainerStyle={{
          color: "#fff",
        }} />


      <View style={{ width: 281, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black", fontSize: 11, fontWeight: "400", textAlign: "center", lineHeight: 17.6 }}>By
          clicking, you acknowledge and agree to <Text onPress={() => Linking.openURL("http://google.com")}
                                                       style={{ textDecorationLine: "underline", fontWeight: "600" }}>Term
            of Use and Privacy Policy</Text> </Text>
      </View>
    </SafeAreaView>
  );
};


export default ProfileCompleted;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // bottom: 40,
    height: h,
  },
});
