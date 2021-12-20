import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Linking, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const CentralSignUp = ({ navigation }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");


  return (


    <KeyboardAwareScrollView>

      <View style={styles.container}>
        <View style={{ width: w - 40, bottom: 30 }}>

          <Text
            style={{ color: "#000000", fontSize: 24, lineHeight: 29.11, alignSelf: "flex-start", marginBottom: 10 }}>Create
            your
            account</Text>

          <Text style={{ color: "#20173D", fontSize: 16, fontWeight: "400", alignSelf: "flex-start" }}>Supporting
            the everyday
            Nigerians. </Text>
        </View>

        <CustomTextInput title={"First name"} placeholderText={"Enter your first name"}
                         props={{
                           value: firstName,
                           onChangeText: setFirstName,
                         }}

        />
        <CustomTextInput title={"Last name"} placeholderText={"Enter your last name"}
                         props={{
                           value: lastName,
                           onChangeText: setLastName,
                         }}
        />
        <CustomTextInput title={"Phone number"} placeholderText={"Enter your Phone number"} props={{
          keyboardType: "number-pad",
          maxLength: 11,
          value: phoneNumber,
          onChangeText: setPhoneNumber,
        }} />

        <CustomTextInput title={"Code (optional)"} placeholderText={"Enter your code"}
                         props={{
                           value: code,
                           onChangeText: setCode,
                         }}

        />


        <CustomButton title={"Register"}
                      containerStyle={{
                        marginVertical: 20,
                        backgroundColor: (phoneNumber && firstName && lastName) !== "" ? "#6B57EB" : "#E0E0E0",
                      }}
                      textContainerStyle={{ color: "#ffffff" }} />


        <View style={{ width: 281, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "black", fontSize: 11, fontWeight: "400", textAlign: "center", lineHeight: 17.6 }}>By
            creating, you acknowledge and agree to <Text onPress={() => Linking.openURL("http://google.com")}
                                                         style={{ textDecorationLine: "underline" }}>Term
              of Use & Privacy Policy.</Text> </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
          <Text style={{ color: "#000000", fontSize: 16, lineHeight: 25.6, fontWeight: "300" }}>Already have an
            account?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Login");
          }}>
            <Text style={{ color: "#6B57EB", fontSize: 16, lineHeight: 25.6, fontWeight: "600" }}> Log In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAwareScrollView>

  );
};

export default CentralSignUp;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // bottom: 40,
    height: h,
  },
});
