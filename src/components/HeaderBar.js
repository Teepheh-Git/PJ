import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HeaderBar = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", marginVertical: 20, alignSelf:'flex-start'}}>

      <Image style={{ height: 15, width: 10 }} resizeMode={"center"} source={require("../../assets/leftArrow.png")} />
      <Text style={{ color: "black", fontSize: 24, fontWeight: "500" }}> Back</Text>


    </TouchableOpacity>
  );
};

export default HeaderBar;
