import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomDropDown from "../components/CustomDropDown";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const sector = ["Farmers", "Hair Stylist", "Transport Workers", "Fashion Designers"];
const benefit = ["Insurance", "Loan", "HMO", "NHIS", "Services"];


const GetStarted = ({ navigation }) => {

  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const selectItemForSector = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectedSector(selectedItem);
    // setSelectedBenefit(selectedItem);

  };

  const selectItemForBenefit = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectedBenefit(selectedItem);

  };


  return (

    <SafeAreaView style={styles.container}>

      <View style={{ width: w - 40, top: 49 }}>
        <Text style={{
          fontWeight: "500", fontSize: 32, color: "black"
          , letterSpacing: 0.1, marginVertical: 4,
        }}>Get Started</Text>
        <Text style={{
          fontWeight: "400",
          fontSize: 18,
          lineHeight: 20,
          letterSpacing: 0.1,
          marginVertical: 4,
          opacity: 0.5,
          color: "black",
          marginBottom: 70,

        }}>Supporting
          the everyday
          Nigerians.</Text>


        <CustomDropDown
          title={"Select a sector"}
          placeholderName={"Choose a sector"}
          data={sector}
          props={{
            onSelect: selectItemForSector,
          }}
        />


        <CustomDropDown
          title={"Choose a Benefit"}
          placeholderName={"Choose a Benefit"}
          data={benefit}
          props={{
            onSelect: selectItemForBenefit,
          }}
        />


      </View>


      <CustomButton
        onPress={() => {

          if (selectedBenefit && selectedSector !== "") {
            navigation.navigate("ReviewChoice", { selectedSector, selectedBenefit });

          }

        }}

        title={"Review Choice"}
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

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: h,
  },
});
