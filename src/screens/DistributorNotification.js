import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import CustomButton from "../components/CustomButton";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

export const DistributorNotification = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/*<HeaderBar onPress={() => navigation.pop()} />*/}
      <Text style={{ color: "black", fontSize: 28, fontWeight: "500" }}>Notification</Text>


      <View style={{
        width: w - 40,
        height: 123,
        borderRadius: 6,
        backgroundColor: "white",
        shadowOffset: 0.2,
        elevation: 1.3,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 18,
        marginVertical: 31,
        flexDirection: "row",
      }}>

        <Image source={require("../../assets/bell.png")} style={{ width: 33, height: 33 }} />

        <Text style={{
          width: w - 180,
          paddingHorizontal: 10,
          lineHeight: 24,
          letterSpacing: 0.16,
          // fontSize: 18,
          marginRight: 20,
        }}>Congratulations, your members can now register to get benefits.


          <Text style={{ fontWeight: "bold" }}> Note: </Text>
          Verification of beneficiaries will be done before approval</Text>
      </View>






    </SafeAreaView>
  );
};

export default DistributorNotification;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // bottom: 40,
    // backgroundColor: "white",
    padding: 20,
    // height: h,
  },
});
