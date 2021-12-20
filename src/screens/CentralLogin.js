import React, { useContext, useState } from "react";
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

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const CentralLogin = ({ navigation }) => {

  const { login } = useContext(AuthContext);


  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);


  return (


    <KeyboardAwareScrollView>

      <SafeAreaView style={styles.container}>


        <View style={{ width: w - 40, bottom: 70 }}>

          <Text
            style={{ color: "#000000", fontSize: 32, fontWeight:'600', alignSelf: "flex-start", marginBottom: 10 }}>Welcome
            back 👋 </Text>

          <Text style={{ color: "#20173D", fontSize: 22, fontWeight: "300", alignSelf: "flex-start" }}>Login with your
            data </Text>
        </View>

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
          title={"Password"}
          initialValue={password}
          onChange={password => setPassword(password)}
          placeholderText={"Enter your password"}
          props={{
            secureTextEntry: true,
          }}


        />


        <CustomButton
          title={"Login"}
          loading={loadingStatus}
          onPress={async () => {
            try {
              if (phoneNumber && password !== "") {
                setLoadingStatus(true);
                await login(phoneNumber, password);
                // navigation.navigate("CentralStackNavigator");
              }
            } catch (e) {
              console.log(e);
              setLoadingStatus(false);
            }
          }

          }


          containerStyle={{
            marginVertical: 20,
            backgroundColor: (phoneNumber && password) !== "" ? "#6B57EB" : "#E0E0E0",
          }}
          textContainerStyle={{ color: "#ffffff" }} />


      </SafeAreaView>
    </KeyboardAwareScrollView>

  );
};

export default CentralLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    padding: 20,
    height: h,


    // backgroundColor:'red'
  },
});
