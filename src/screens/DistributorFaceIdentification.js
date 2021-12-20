import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const DistributorFaceIdentification = ({ navigation }) => {







  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: w - 40, top: 49 }}>
        <Text style={{
          fontWeight: "500", fontSize: 24, color: "black"
          , lineHeight: 29.11, letterSpacing: 0.1, marginVertical: 4,
        }}>Complete
          your
          profile</Text>
        <Text style={{
          fontWeight: "400",
          fontSize: 16,
          lineHeight: 20,
          letterSpacing: 0.1,
          marginVertical: 4,
          opacity: 0.5,
          color: "black",

        }}>Supporting
          the everyday
          Nigerians.</Text>
        <Text style={{
          fontWeight: "600",
          fontSize: 14,
          lineHeight: 18.11,
          letterSpacing: 0.1,
          marginVertical: 4,
          color: "#666666",
          marginTop: 19,
        }}>Step
          1 of 2</Text>

        <View
          style={{ width: w - 40, height: 10, borderRadius: 44.24, backgroundColor: "#F3EFFF80", marginVertical: 7 }}>
          <View style={{ width: w - 230, height: 10, borderRadius: 44.24, backgroundColor: "#6B57EB" }} />
        </View>

        <Image source={require("../../assets/idIcon.png")}
               style={{ width: 119.43, height: 119.43, alignSelf: "center", marginVertical: 100 }} />
      </View>
      <Text style={{
        fontSize: 24, fontWeight: "600", letterSpacing: 0.1, marginVertical: 15, color: "black",
      }}>Face
        identification</Text>
      <Text style={{
        fontSize: 16, fontWeight: "400", letterSpacing: 0.1, color: "black"
        , marginBottom: 15,
      }}>Scan your face to verify
        your identity</Text>

      <CustomButton
        onPress={() => {

            navigation.navigate("DistributorCamera");

        }}

        title={"Get started"}
        textContainerStyle={{
          color: "white",
        }}
        containerStyle={{
          backgroundColor: "#6B57EB",
          marginVertical: 74,
        }} />


    </SafeAreaView>
  );
};


export default DistributorFaceIdentification;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: h,
  },
});
