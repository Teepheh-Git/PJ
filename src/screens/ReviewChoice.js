import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomDropDown from "../components/CustomDropDown";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const ReviewChoice = ({ navigation, route }) => {

  const selectedSectorAndBenefit = route.params;

  console.log(selectedSectorAndBenefit);


  return (

    <SafeAreaView style={styles.container}>

      <View style={{ width: w - 40, top: 49 }}>
        <Text style={{
          fontWeight: "500", fontSize: 24, color: "black"
          , lineHeight: 29.11, letterSpacing: 0.1, marginVertical: 4,
        }}>Review your Choice</Text>
        <Text style={{
          fontWeight: "400",
          fontSize: 18,
          lineHeight: 20,
          letterSpacing: 0.1,
          marginVertical: 4,
          opacity: 0.5,
          color: "black",
          marginBottom: 20,
        }}>kindly confirm the sector and benefits you chose</Text>

        <View style={{ marginVertical: 25 }}>
          <Text style={{
            fontSize: 28,
            fontWeight: "500",
            letterSpacing: 0.16,
            marginVertical: 10,
            color: "#20173D",
          }}>Sector</Text>
          <Text style={{
            fontSize: 18,
            opacity: 0.6,
            marginBottom: 10,
            color: "#20173D",
          }}>{selectedSectorAndBenefit.selectedSector}</Text>


          <Text style={{
            fontSize: 28,
            fontWeight: "500",
            letterSpacing: 0.16,
            marginVertical: 10,
            color: "#20173D",
          }}>Benefit</Text>
          <Text
            style={{ fontSize: 14, opacity: 0.6, color: "#20173D" }}>{selectedSectorAndBenefit.selectedBenefit}</Text>

        </View>


      </View>


      <CustomButton
        onPress={() => {
          navigation.navigate("ApplyForBenefitImageUpload");
        }}

        title={"Apply for benefits"}
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

export default ReviewChoice;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: h,
  },
});
