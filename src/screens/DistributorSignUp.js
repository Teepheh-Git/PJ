import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Dimensions, Linking, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../context/AuthContext";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const DistributorSignUp = ({ navigation }) => {

  const { register } = useContext(AuthContext);

  const [loadingStatus, setLoadingStatus] = useState(false);


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");


  return (


    <KeyboardAwareScrollView>

      <View style={styles.container}>


        <View style={{ width: w - 40, bottom: 30, marginBottom: 20 }}>

          <Text
            style={{ color: "#000000", fontSize: 32, alignSelf: "flex-start", marginBottom: 10, fontWeight: "600" }}>Create
            your
            account</Text>

          <Text style={{ color: "#20173D", fontSize: 20, fontWeight: "400", alignSelf: "flex-start" }}>Supporting
            the everyday
            Nigerians. </Text>
        </View>

        <CustomTextInput
          title={"First name"}
          placeholderText={"Enter your first name"}
          initialValue={firstName}
          onChange={firstName => setFirstName(firstName)}
        />

        <CustomTextInput
          title={"Last name"}
          placeholderText={"Enter your last name"}
          initialValue={lastName}
          onChange={lastName => setLastName(lastName)}
        />


        <CustomTextInput
          title={"Phone number"}
          placeholderText={"Enter your Phone number"}
          initialValue={phoneNumber}
          onChange={phoneNumber => setPhoneNumber(phoneNumber)}
          props={{
            keyboardType: "number-pad",
            maxLength: 11,
          }} />
        <CustomTextInput
          title={"Create Password"}
          placeholderText={"Enter your password"}
          initialValue={password}
          onChange={password => setPassword(password)}
          props={{
            secureTextEntry: true,
          }}


        />


        <CustomButton title={"Register"}
                      loading={loadingStatus}
                      onPress={async () => {


                        let type = "organization";
                        try {

                          if (firstName && lastName && password && phoneNumber !== "") {
                            setLoadingStatus(true);
                            await register(phoneNumber, password, firstName, lastName, type);
                            navigation.navigate("DistributedAccountCreated");
                          }

                        } catch (e) {
                          setLoadingStatus(false);
                          console.log(e);
                        }

                      }}
                      containerStyle={{
                        marginVertical: 20,
                        backgroundColor: (phoneNumber && firstName && lastName && password) !== "" ? "#6B57EB" : "#E0E0E0",
                      }}
                      textContainerStyle={{ color: "#ffffff" }} />


        <View style={{ width: w - 70, alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "400", textAlign: "center" }}>By
            creating, you acknowledge and agree to <Text onPress={() => Linking.openURL("http://google.com")}
                                                         style={{ textDecorationLine: "underline" }}>Term
              of Use & Privacy Policy.</Text> </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
          <Text style={{ color: "#000000", fontSize: 18, lineHeight: 25.6, fontWeight: "300" }}>Already have an
            account? </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Login");
          }}>
            <Text style={{ color: "#6B57EB", fontSize: 18, lineHeight: 25.6, fontWeight: "600" }}> Log In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAwareScrollView>

  );
};

export default DistributorSignUp;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // bottom: 40,
    height: h,
  },
});
