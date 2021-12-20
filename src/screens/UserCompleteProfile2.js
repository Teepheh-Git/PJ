import React, { useContext, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomDropDown from "../components/CustomDropDown";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../context/UserContext";
import { handleQuery } from "../graphql/requests";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const profession = ["Truck Driver", "Hair Dresser", "Mechanics", "Barbers"];
const bankName = ["First Bank", "Access Bank", "GTBank", "Kuda"];
const marital = ["Single", "Married", "Divorced", "Widowed"];


const UserCompleteProfile2 = ({ navigation, route }) => {

    const dataFromPrevPage = route.params;

    console.log(dataFromPrevPage);


    const user = useContext(UserContext);


    const [dob, setDob] = useState("");
    const [acctNum, setAcctNum] = useState("");
    const [selectProfession, setSelectProfession] = useState(null);
    const [selectMarital, setSelectMarital] = useState(null);
    const [selectBank, setSelectBank] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const selectItemProfession = (selectedItem, index) => {
      // console.log(selectedItem, index, "SELECTTTTTT");
      setSelectProfession(selectedItem);
    };

    const selectItemMarital = (selectedItem, index) => {
      // console.log(selectedItem, index, "SELECTTTTTT");
      setSelectMarital(selectedItem);
    };

    const selectItemBank = (selectedItem, index) => {
      // console.log(selectedItem, index, "SELECTTTTTT");
      setSelectBank(selectedItem);
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
    };


    const SubmitForm = async () => {

      try {
        setIsLoading(true);
        let qry = queries.updateUser(
          `
          email: "${dataFromPrevPage.email}"
        Lga: "${dataFromPrevPage.lcda}"
        State:"${dataFromPrevPage.userState}"
        dob:"${dob}"
        BVN:"${dataFromPrevPage.bvnNIN}"
        marital_status:"${selectMarital}"
        profession:"${selectProfession}"
        next_of_kin: "${dataFromPrevPage.nextOfKin}"
        acct_bank:"${selectBank}"
        acct_no:"${acctNum}"
      `,
          `
       user {
         email
      Lga
      dob
      State
      profession
      BVN
      marital_status
      next_of_kin
      acct_bank
      acct_no
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
              3 of 3</Text>

            <View
              style={{
                width: w - 40,
                height: 10,
                borderRadius: 44.24,
                backgroundColor: "#F3EFFF80",
                marginVertical: 7,
                marginBottom: 25,
              }}>
              <View style={{ width: w - 40, height: 10, borderRadius: 44.24, backgroundColor: "#6B57EB" }} />
            </View>


            <CustomDropDown
              title={"Profession"}
              placeholderName={"Choose your Profession"}
              data={profession}
              props={{
                onSelect: selectItemProfession,
              }}
            />

            <CustomTextInput
              title={"Date of birth"}
              placeholderText={"Enter your Date of birth"}
              initialValue={dob}
              onChange={dob => setDob(dob)}

            />

            <CustomDropDown
              title={"Marital Status"}
              placeholderName={"Choose your Marital Status"}
              data={marital}
              props={{
                onSelect: selectItemMarital,
              }}
            />


            <CustomDropDown
              title={"Bank Name"}
              placeholderName={"Choose your bank"}
              data={bankName}
              props={{
                onSelect: selectItemBank,
              }}
            />

            <CustomTextInput
              title={"Bank Account Number"}
              placeholderText={"Enter your bank account number"}
              initialValue={acctNum}
              onChange={acctNum => setAcctNum(acctNum)}
              props={{
                keyboardType: "numeric",
                maxLength: 10,
              }}
            />
          </View>


          <CustomButton
            onPress={async () => {

              try {
                await SubmitForm();
                navigation.navigate("ProfileCompleted");
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
              marginVertical: 74,
            }} />


        </SafeAreaView>


      </KeyboardAwareScrollView>


    )
      ;
  }
;

export default UserCompleteProfile2;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: h,
  },
});
