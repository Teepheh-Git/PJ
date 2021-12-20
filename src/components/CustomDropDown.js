import React, { useState } from "react";
import { Dimensions, Image, Text, TextInput, View } from "react-native";

import SelectDropdown from "react-native-select-dropdown";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

export const CustomDropDown = ({ data, props, title, placeholderName, itemSelected }) => {


  function DropDownIcon() {
    return (
      <Image source={require("../../assets/dropDownIcon.png")} style={{ width: 15, height: 8 }} />
    );
  }

  return (

    <View style={{ marginBottom: 15,  }}>
      <Text style={{ bottom: 2, color: "#20173D", fontWeight: "400", fontSize: 18, }}>{title}</Text>

      <SelectDropdown
        data={data}
        rowStyle={{ backgroundColor: "#F3EFFF80" }}
        renderDropdownIcon={DropDownIcon}
        defaultButtonText={placeholderName}

        // onSelect={(selectedItem, index) => {
        //   // console.log(selectedItem, index);
        //   itemSelected(selectedItem);
        // }}
        buttonTextStyle={{ fontSize: 12, color: "#A3A3A3", textAlign: "left",  }}
        // dropdownStyle={{ paddingLeft:10}}
        buttonStyle={{
          backgroundColor: "#F3EFFF80",
          width: w - 40,
          borderRadius: 5,
          height:55,
          borderWidth: 0.5,
          borderColor: "#C4C4C4",
          marginVertical: 5,

        }}
        {...props}
      />
    </View>


  );
};


export default CustomDropDown;
