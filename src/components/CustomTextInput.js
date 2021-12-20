import React, { useState } from "react";
import { Dimensions, Text, TextInput, View } from "react-native";

const w = Dimensions.get("window").width;


const CustomTextInput = ({ title, placeholderText, inputContainerStyle, props, initialValue,onChange }) => {

  const [isFocused, setIsFocused] = useState(false);


  return (

    <View style={{ marginBottom: 15 }}>
      <Text style={{ bottom: 2, color: "#20173D", fontWeight: "400", fontSize: 18,  }}>{title}</Text>

      <TextInput
        {...props}
        placeholder={placeholderText}
        value={initialValue}
        onChangeText={onChange}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={"#A3A3A3"}
        onFocus={() => setIsFocused(true)}
        style={[{
          borderRadius: 5,
          backgroundColor: "#F3EFFF80",
          // opacity:0.3,
          width: w - 40,
          color: "#000000",
          height: 55,
          borderColor: isFocused ? "#6045B8" : "#C4C4C4",
          borderWidth: isFocused ? 2 : 0.5,
          marginVertical: 5,
          paddingHorizontal: 16,
        }, { ...inputContainerStyle }]}
      />


    </View>
  );
};


export default CustomTextInput;
