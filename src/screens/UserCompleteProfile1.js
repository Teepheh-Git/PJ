import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomDropDown from "../components/CustomDropDown";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const lcda = ["Ifako Ijaiye", "Ojokoro", "Badagry lcda", "Ikeja2", "Ogba"];
const age = ["18-24", "25-35", "35-55", "65+"];


const UserCompleteProfile1 = ({ navigation }) => {


  const [email, setEmail] = useState("");
  const [bvnNIN, setBvnNIN] = useState("");
  const [userState, setUserState] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [selectLcda, setSelectLcda] = useState(null);
  const [selectAge, setSelectAge] = useState(null);


  const selectItemLcda = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectLcda(selectedItem);
  };

  const selectItemAge = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectAge(selectedItem);
  };
  return (

    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>

        <View style={{ width: w - 40, top: 49 }}>
          <Text style={{
            fontWeight: "500", fontSize: 24, color: "black"
            , lineHeight: 29.11, letterSpacing: 0.1, marginVertical: 4,
          }}>Complete
            your
            profile</Text>
          <Text style={{
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 20,
            letterSpacing: 0.1,
            marginVertical: 4,
            opacity: 0.5,
            color: "black",

          }}>Supporting
            the everyday
            Nigerians.</Text>
          <Text style={{
            fontWeight: "600",
            fontSize: 14,
            lineHeight: 18.11,
            letterSpacing: 0.1,
            marginVertical: 4,
            color: "#666666",
            marginTop: 19,
          }}>Step
            2 of 3</Text>

          <View
            style={{
              width: w - 40,
              height: 10,
              borderRadius: 44.24,
              backgroundColor: "#F3EFFF80",
              marginVertical: 7,
              marginBottom: 25,
            }}>
            <View style={{ width: w - 170, height: 10, borderRadius: 44.24, backgroundColor: "#6B57EB" }} />
          </View>


          <CustomTextInput
            title={"Email address"}
            placeholderText={"Enter your email address"}
            initialValue={email}
            onChange={email => setEmail(email)}
          />

          <CustomTextInput
            title={"BVN or NIN"}
            placeholderText={"Enter your BVN or NIN"}
            props={{
              keyboardType: "numeric",
              maxLength: 11,
            }}
            initialValue={bvnNIN}
            onChange={bvnNIN => setBvnNIN(bvnNIN)}
          />

          <CustomDropDown
            title={"LCDA"}
            placeholderName={"Choose your LCDA"}
            data={lcda}
            props={{
              onSelect: selectItemLcda,
            }}
          />

          <CustomTextInput
            title={"State"}
            placeholderText={"Enter your state of residence"}
            initialValue={userState}
            onChange={userState => setUserState(userState)}
          />


          <CustomDropDown
            title={"Age Range"}
            placeholderName={"Choose your age range"}
            data={age}
            props={{
              onSelect: selectItemAge,
            }}
          />

          <CustomTextInput
            title={"Next of Kin"}
            placeholderText={"Enter the name of your Next of Kin"}
            initialValue={nextOfKin}
            onChange={nextOfKin => setNextOfKin(nextOfKin)}
          />
        </View>


        <CustomButton
          onPress={() => {
            if (email && bvnNIN && userState !== "") {
              navigation.navigate("UserCompleteProfile2", { email, bvnNIN, lcda, userState, selectAge, nextOfKin });
            }

          }}

          title={"Save and Continue"}
          textContainerStyle={{
            color: "white",
          }}
          containerStyle={{
            backgroundColor: "#6B57EB",
            marginVertical: 74,
          }} />


      </SafeAreaView>


    </KeyboardAwareScrollView>


  );
};

export default UserCompleteProfile1;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: h,
  },
});
