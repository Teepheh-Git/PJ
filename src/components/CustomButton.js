import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const CustomButton = ({ title, onPress, containerStyle, textContainerStyle, loading }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[{
        width: w - 40,
        height: 55,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
      }, { ...containerStyle },
      ]}>

      {loading ? <ActivityIndicator size={"small"} color={"#ffffff"} /> :

        <Text style={[{
          color: "#6B57EB",
          fontWeight: "600",
          fontSize: 16,
          // lineHeight: 14.6,
        }, { ...textContainerStyle }]}>{title}</Text>}
    </TouchableOpacity>

  );
};

export default CustomButton;
