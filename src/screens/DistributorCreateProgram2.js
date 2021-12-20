import React, { useContext, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomDropDown from "../components/CustomDropDown";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Calender from "../components/Calender";
import HeaderBar from "../components/HeaderBar";
import { handleQuery, postPublic } from "../graphql/requests";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { BASE_URL } from "../config";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const packages = ["loan", "HMO", "Services", "Items"];
const benefits = [
  "Rice",
  "Car",
  "Cap",
  "Phones",
];

const DistributorCreateProgram2 = ({ navigation, route }) => {

  const user = useContext(UserContext);

  console.log(route.params, "ROUTE PARAMETERS");

  const dataFromPreviousPage = route.params;


  const [proposeBeneficiary, setProposeBeneficiary] = useState("");
  const [selectPackage, setPackage] = useState(null);
  const [selectBenefit, setSelectBenefit] = useState(null);

  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const selectItemForPackage = (selectedItem, index) => {
    console.log(selectedItem, "SELECTTTTTT");
    setPackage(selectedItem);
  };
  const selectItemForBenefit = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectBenefit(selectedItem);
  };


  const OnStartingDateChange = (date) => {
    // console.log(date);
    setStartingDate(date);
  };

  const OnEndingDateChange = (date) => {
    // console.log(date);
    setEndingDate(date);
  };


  const queries = {
    createProgram: (data, query) => (
      `mutation {
        createProgram(
          input: {
            data: {${data}}
          }
        ) {
        program{${query}}
        }
      }`),

  };


  const CreateAProgram = async () => {

    try {
      setIsLoading(true);
      let qry = queries.createProgram(
        `
        name:"${dataFromPreviousPage.programme}",
        age_range: "${dataFromPreviousPage.selectAge}",
        no_of_beneficiaries: ${proposeBeneficiary},
        start_date: "${startingDate}",
        end_date: "${endingDate}",
        status: pending
      `,
        `
        name
        age_range
        no_of_beneficiaries
        start_date
        end_date
        status
`);
      console.log(qry, "qryyyyyyy")

      let res = await postPublic("/programs", qry);
      console.log(res.data, "REZZZXXXX");

    } catch (e) {
      console.log(e, "Errorrr");
      setIsLoading(false);
    }


  };


  {/*const CreateProgram = async () => {*/
  }
  {/*  await axios.post(`${BASE_URL}/programs`, {*/
  }
  {/*    name: "Transport",*/
  }
  {/*    age_range: "12-33",*/
  }
  {/*    no_of_beneficiaries: "2",*/
  }
  {/*    start_date: "2022-12-1",*/
  }
  {/*    end_date: "2022-12-22",*/
  }
  //     status: pending,
  //
  //   }).then(res => {
  //     console.log(res, "REZZZ");
  //   }).catch(error => console.log(error, "ERROORR"));
  //
  //
  // };


  return (

    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>

        <HeaderBar onPress={() => navigation.pop()} />

        <View style={{ width: w - 40, top: 49 }}>
          <Text style={{
            fontWeight: "500", fontSize: 24, color: "black"
            , lineHeight: 29.11, letterSpacing: 0.1, marginVertical: 4,
          }}>Create a
            programme</Text>
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
            2 of 2</Text>

          <View
            style={{
              width: w - 40,
              height: 10,
              borderRadius: 44.24,
              backgroundColor: "rgba(219,216,236,0.5)",
              marginVertical: 7,
              marginBottom: 25,
            }}>
            <View style={{ width: w - 40, height: 10, borderRadius: 44.24, backgroundColor: "#6B57EB" }} />
          </View>


          <CustomTextInput
            title={"Proposed number of beneficiaries"}
            placeholderText={"Enter the amount of people you can cover"}
            initialValue={proposeBeneficiary}
            onChange={proposeBeneficiary => setProposeBeneficiary(proposeBeneficiary)}
            props={{
              keyboardType: "numeric",
            }}

          />


          <Calender title={"When are you starting?"} date={startingDate} placeholder={"Select start date"} props={{
            onDateChange: OnStartingDateChange,
          }} />
          <Calender title={"When will it end?"} placeholder={"Select end date"} date={endingDate} props={{
            onDateChange: OnEndingDateChange,
          }} />


          <CustomDropDown
            title={"Product Packages"}
            placeholderName={"Select package"}
            data={packages}
            props={{
              onSelect: selectItemForPackage,
            }}
          />


          <CustomDropDown
            title={"Benefit"}
            placeholderName={"Select benefit"}
            data={benefits}
            props={{
              onSelect: selectItemForBenefit,
            }}
          />


        </View>


        <CustomButton
          onPress={async () => {


            try {
              await CreateAProgram();

              // setTimeout(() => {
              //   navigation.navigate("ProgrammeSubmitted");
              //
              // }, 3000);


              // navigation.navigate("ProgrammeSubmitted");


            } catch (e) {
              console.log(e);

            }

          }}
          loading={isLoading}
          title={"Submit"}
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

export default DistributorCreateProgram2;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: h,
  },
});
