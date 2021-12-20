import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

export const Notification = ({ navigation }) => {
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
        }}>Congratulations, your benefit has been approved you can now get 25% off your truck insurance </Text>


      </View>


    </SafeAreaView>
  );
};

export default Notification;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // bottom: 40,
    backgroundColor: "white",
    padding: 18,
    // height: h,
  },
});
