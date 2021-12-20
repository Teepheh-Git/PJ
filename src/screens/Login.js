import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Linking,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const Login = ({ navigation }) => {


  const { login } = useContext(AuthContext);
  const user = useContext(UserContext);


  console.log(user, "WHICH USER???? ");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(false);
  const [networkError, setNetworkError] = useState(false);


  return (

    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>


        <View style={{ width: w - 100, bottom: 50 }}>

          <Text
            style={{ color: "#000000", fontSize: 32, alignSelf: "flex-start", marginBottom: 10, fontWeight: "600" }}>Welcome
            back 👋 </Text>

          <Text
            style={{
              color: "#20173D",
              fontSize: 20,
              letterSpacing: 0.55,
              fontWeight: "400",
              alignSelf: "flex-start",
            }}>Login
            with your
            data that you entered during your registration. </Text>
        </View>

        <CustomTextInput
          title={"Phone number"}
          placeholderText={"Enter your Phone number"}
          initialValue={phoneNumber}
          onChange={(phoneNumber) => (setPhoneNumber(phoneNumber), setError(false), setNetworkError(false))}
          props={{
            keyboardType: "number-pad",
            maxLength: 11,
          }} />

        <CustomTextInput
          title={"Password"}
          placeholderText={"Enter your password"}
          initialValue={password}
          onChange={password => (setPassword(password), setError(false), setNetworkError(false))}
          props={{
            secureTextEntry: true,
          }}

        />

        <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 20, }}>
          <Text style={{ fontSize: 18, color:'black' }}>Forgot Password?</Text>

        </TouchableOpacity>

        {error &&
        <Text style={{ color: "red", fontSize: 16, fontWeight: "500" }}>Phone number or password incorrect</Text>
        }

        {networkError &&
        <Text style={{ color: "red", fontSize: 16, fontWeight: "500" }}>Network Error!</Text>
        }

        <CustomButton title={"Login"}

                      loading={loadingStatus}

                      onPress={async () => {

                        try {
                          if (phoneNumber && password !== "") {
                            setLoadingStatus(true);
                            await login(phoneNumber, password);
                            // navigation.navigate(userOrDistributor.isDistributor === true ? "DistributorStackNavigator" : "UserStackNavigator");
                          }
                        } catch (e) {
                          setLoadingStatus(false);
                          {
                            e.message !== "Network Error" && setError(true);
                          }

                          {
                            e.message === "Network Error" && setNetworkError(true);
                          }
                          // console.log(e.message, "EEEE");
                        }

                      }}
                      containerStyle={{
                        marginVertical: 20,
                        backgroundColor: (phoneNumber && password) !== "" ? "#6B57EB" : "#E0E0E0",
                      }}
                      textContainerStyle={{ color: "#ffffff" }} />


        <View style={{ width: w-70, alignItems: "center", justifyContent: "center", alignSelf:'center' }}>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "400", textAlign: "center", lineHeight: 17.6 }}>By
            creating, you acknowledge and agree to <Text onPress={() => Linking.openURL("http://google.com")}
                                                         style={{ textDecorationLine: "underline" }}>Term
              of Use & Privacy Policy.</Text> </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", top: 30 }}>
          <Text style={{ color: "#000000", fontSize: 16, lineHeight: 25.6, fontWeight: "300" }}>Don't have an
            account?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Welcome");
          }}>
            <Text style={{ color: "#6B57EB", fontSize: 16, lineHeight: 25.6, fontWeight: "600" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>

  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    padding: 20,
    height: h
  },
});
