import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomDropDown from "../components/CustomDropDown";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderBar from "../components/HeaderBar";
import { MultiSelectDropdown } from "react-native-multiselect-dropdown-picker";
import MultiSelect from "react-native-multiple-select";
import Select2 from "react-select2-native";
import { stat } from "@babel/core/lib/gensync-utils/fs";

const mockData = [
  { id: 1, name: "React Native Developer", checked: true }, // set default checked for render option item
  { id: 2, name: "Android Developer" },
  { id: 3, name: "iOS Developer" },
];


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const items = [{
  id: "92iijs7yta",
  name: "Ondo",
  checked: true,
}, {
  id: "a0s0a8ssbsd",
  name: "Ogun",
}, {
  id: "16hbajsabsd",
  name: "Calabar",
}, {
  id: "nahs75a5sg",
  name: "Lagos",
}, {
  id: "667atsas",
  name: "Maiduguri",
}, {
  id: "hsyasajs",
  name: "Anambra",
}, {
  id: "djsjudksjd",
  name: "Benue",
}, {
  id: "sdhyaysdj",
  name: "Kaduna",
}, {
  id: "suudydjsjd",
  name: "Abuja",
},
];


const sector = ["Transport", "Design", "Mechanics", "MakeUp"];
const age = ["18-24", "25-35", "36-55", "56+"];
const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];


const DistributorCreateProgram = ({ navigation }) => {


  const [programme, setProgramme] = useState("");
  const [numOfStates, setNumOfStates] = useState("");
  const [selectSector, setSelectSector] = useState(null);
  const [selectAge, setSelectAge] = useState(null);
  const [selectState, setSelectState] = useState(null);
  const [stateSelectedItem, setStateSelectedItem] = useState([]);


  const selectItemSector = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectSector(selectedItem);
  };

  const selectItemAge = (selectedItem, index) => {
    // console.log(selectedItem, index, "SELECTTTTTT");
    setSelectAge(selectedItem);
  };


  const selectItemForState = (selectedItem, index) => {
    // console.log(selectedItem, "SELECTTTTTT");
    setSelectState(selectedItem);
  };


  const onSelectedItemsChange = selectedItems => {
    console.log(stateSelectedItem, "SELECTTTTTT");

    setStateSelectedItem(selectedItems);
  };


  return (

    <KeyboardAwareScrollView>


      <SafeAreaView style={styles.container}>

        <HeaderBar onPress={() => navigation.pop()} />

        <View style={{ width: w - 40, top: 35 }}>
          <Text style={{
            fontWeight: "500", fontSize: 32, color: "black"
            , letterSpacing: 0.1, marginBottom: 10,
          }}>Create a
            programme</Text>
          <Text style={{
            fontWeight: "400",
            fontSize: 18,
            // lineHeight: 20,
            // marginBottom: 15,
            opacity: 0.5,
            color: "black",

          }}>Supporting
            the everyday
            Nigerians.</Text>
          <Text style={{
            fontWeight: "600",
            fontSize: 14,
            letterSpacing: 0.1,
            marginVertical: 4,
            color: "#666666",
            marginTop: 30,
          }}>Step
            1 of 2</Text>

          <View
            style={{
              width: w - 40,
              height: 10,
              borderRadius: 44.24,
              backgroundColor: "rgba(219,216,236,0.5)",
              marginVertical: 7,
              marginBottom: 25,
              // marginTop:30
            }}>
            <View style={{ width: w - 250, height: 10, borderRadius: 44.24, backgroundColor: "#6B57EB" }} />
          </View>


          <CustomTextInput
            title={"Programme Name"}
            placeholderText={"Enter programme name"}
            initialValue={programme}
            onChange={programme => setProgramme(programme)}
          />


          <CustomDropDown
            title={"Select Sector"}
            placeholderName={"Choose your sector"}
            data={sector}
            props={{
              onSelect: selectItemSector,
            }}
          />

          <CustomTextInput
            title={"Number of State(s)"}
            placeholderText={"Enter the number state"}
            initialValue={numOfStates}
            onChange={numOfStates => setNumOfStates(numOfStates)}
            props={{
              keyboardType: "numeric",
            }}
          />


          <View style={{ marginBottom: 15 }}>
            <Text style={{ bottom: 2, color: "#20173D", fontWeight: "400", fontSize: 18, marginBottom: 5 }}>Select
              State(s)</Text>

            <Select2
              isSelectSingle={false}
              style={{ borderRadius: 5, height: 55, backgroundColor: "#F3EFFF80" }}
              colorTheme="#6B57EB"
              popupTitle="Select States(s)"
              title="Select item"
              data={mockData}
              value={stateSelectedItem}
              onSelect={(data) => {
                console.log("DATA");
                // setStateSelectedItem(data);
              }}
              onRemoveItem={(data) => {
                // setStateSelectedItem(data);
              }}
            />

          </View>


          {/*<CustomDropDown*/}
          {/*  title={"Select State"}*/}
          {/*  placeholderName={"Choose your state"}*/}
          {/*  data={states}*/}
          {/*  props={{*/}
          {/*    onSelect: selectItemForState,*/}
          {/*  }}*/}
          {/*/>*/}


          <CustomDropDown
            title={"Age Range"}
            placeholderName={"Choose your age range"}
            data={age}
            props={{
              onSelect: selectItemAge,
            }}
          />


        </View>


        <CustomButton
          onPress={() => {
            navigation.navigate("DistributorCreateProgram2", {
              programme,
              numOfStates,
              selectAge,
              selectSector,
              selectState,
            });
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

export default DistributorCreateProgram;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: h,
    top: 20,
  },
});
