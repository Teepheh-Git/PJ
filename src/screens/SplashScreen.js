// @flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SplashScreenDummy = () => {
  return (
    <View
      style={[StyleSheet.absoluteFill, { backgroundColor: "#6B57EB", alignItems: "center", justifyContent: "center" }]}>

      <Text style={{ color: "white", fontSize: 59, fontWeight: "700" }}>Project Join</Text>

    </View>
  );
};


export default SplashScreenDummy;
