import React, { useContext, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomDropDown from "../components/CustomDropDown";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../context/UserContext";
import { handleQuery } from "../graphql/requests";
import HeaderBar from "../components/HeaderBar";
import { MultiSelectDropdown } from 'react-native-multiselect-dropdown-picker'


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const organisation = ["HairDress", "Trucker", "Miners", "Teachers"];
const age = ["18-24", "25-35", "35-55", "65+"];


const DistributorCompleteProfile = ({ navigation }) => {

  const user = useContext(UserContext);


  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  // const [nextOfKin, setNextOfKin] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const selectOrganization = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setOrganization(selectedItem);
  };


  const queries = {
    updateUser: (data, query) => (
      `mutation {
  updateUser(
    input: {
      where: { id: ${user.id} }
      data: {
       ${data}
      }
    }
  ) {
    ${query}
  }
}`),
    // userBank: (data, query) => (
    //   `mutation{
    //         createBank(input:{
    //           data : {
    //             ${data}
    //           }
    //         })
    //         {
    //             ${query}
    //         }
    //       }`
    // ),
  };


  const SubmitForm = async () => {

    try {
      setIsLoading(true);
      let qry = queries.updateUser(
        `
        email: "${email}",
        Lga: "${location}",
        organization: "${organization}",
        designation: "${designation}",
      
      `,
        `
       user {
          email
          Lga
          organization
          designation
         
    }
`);

      let res = await handleQuery(qry, user.token, false);
      console.log(res.data, "REZZZXXXX");

    } catch (e) {
      console.log(e);
      setIsLoading(false);

    }


  };


  return (

    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>

        <HeaderBar onPress={() => navigation.pop()} />

        <View style={{ width: w - 40, marginTop:30  }}>
          <Text style={{
            fontWeight: "500", fontSize: 32, color: "black"
           , letterSpacing: 0.1, marginVertical: 4,
          }}>Complete
            your
            profile</Text>
          <Text style={{
            fontWeight: "400",
            fontSize: 18,
            letterSpacing: 0.1,
            marginVertical: 5,
            opacity: 0.5,
            color: "black",
            marginBottom:20

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
            2 of 2</Text>

          <View
            style={{
              width: w - 40,
              height: 10,
              borderRadius: 44.24,
              backgroundColor: "rgba(230,226,239,0.5)",
              marginVertical: 7,
              marginBottom: 25,
            }}>
            <View style={{ width: w - 40, height: 10, borderRadius: 44.24, backgroundColor: "#6B57EB" }} />
          </View>


          <CustomTextInput
            title={"Email address"}
            placeholderText={"Enter your email address"}
            initialValue={email}
            onChange={email => setEmail(email)}
          />

          <CustomTextInput
            title={"Location"}
            placeholderText={"Enter your Location"}
            initialValue={location}
            onChange={location => setLocation(location)}

          />

          <CustomDropDown
            title={"Organization"}
            placeholderName={"Choose your organisation"}
            data={organisation}
            props={{
              onSelect: selectOrganization,
            }}


          />


          <CustomTextInput
            title={"Designation"}
            placeholderText={"Enter your designation"}
            initialValue={designation}
            onChange={designation => setDesignation(designation)}
          />


          {/*<CustomTextInput*/}
          {/*  title={"Next of Kin"}*/}
          {/*  placeholderText={"Enter the name of your Next of Kin"}*/}
          {/*  initialValue={nextOfKin}*/}
          {/*  onChange={nextOfKin => setNextOfKin(nextOfKin)}*/}
          {/*/>*/}
        </View>


        <CustomButton
          onPress={async () => {

            try {
              await SubmitForm();
              navigation.navigate("DistributorProfileCompleted");
            } catch (e) {
              console.log(e, "Errorr oooo");
            }
          }}
          loading={isLoading}

          title={"Save and Continue"}
          textContainerStyle={{
            color: "white",
          }}
          containerStyle={{
            backgroundColor: "#6B57EB",
            marginVertical: 50,
          }} />


      </SafeAreaView>


    </KeyboardAwareScrollView>


  );
};

export default DistributorCompleteProfile;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    height: h,

    // top:30,
    padding: 20,
  },
});
