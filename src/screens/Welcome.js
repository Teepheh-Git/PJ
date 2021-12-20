import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
  Pressable, StatusBar,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-ionicons";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const Welcome = ({ navigation }) => {


  return (

    <ImageBackground source={require("../../assets/images/welcomeImg.png")}
                     style={[StyleSheet.absoluteFill, { flex: 1, alignItems: "center", justifyContent: "center" }]}>

      <StatusBar translucent={true} backgroundColor={"transparent"} />


      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", top: 80 }}>
        <Text style={{
          color: "white",
          fontSize: 39,
          fontWeight: "700",
          lineHeight: 54.6,
          marginVertical: 30,
          width: w - 40,
          fontFamily:"Gilroy-Light"
        }}>Supporting
          the everyday
          Nigerians.</Text>

        <CustomButton
          title={"Sign Up as a User"}
          containerStyle={{ backgroundColor: "white", marginTop: 20 }}
          onPress={() => {
            navigation.navigate("UserSignUp");
          }} />

        <CustomButton
          title={"Sign Up as a Distributor"}
          containerStyle={{
            backgroundColor: "transparent",
            marginTop: 20,
            borderColor: "white",
            borderWidth: 0.5,
          }}
          textContainerStyle={{ color: "white" }}
          onPress={() => {
            navigation.navigate("DistributorSignUp");
          }} />

        <CustomButton title={"Log In as Central"}
                      containerStyle={{
                        backgroundColor: "transparent",
                        marginTop: 20,
                        borderColor: "white",
                        borderWidth: 0.5,
                      }}
                      textContainerStyle={{ color: "white" }}
                      onPress={() => {
                        navigation.navigate("CentralLogin");
                      }} />


        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
          <Text style={{ color: "white", fontSize: 16, lineHeight: 25.6, fontWeight: "300" }}>Already have an
            account?</Text>
          <TouchableOpacity onPress={() => {


            navigation.navigate("Login");


          }}>
            <Text style={{ color: "white", fontSize: 16, lineHeight: 25.6, fontWeight: "600" }}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>

  );
};

export default Welcome;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    width: w - 40,
    height: h / 4,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },


});

