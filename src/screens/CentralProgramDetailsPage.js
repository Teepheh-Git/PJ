import React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import CustomButton from "../components/CustomButton";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const data = [
  { key: "1", title: "Program Name", detail: "Hairstylist Empowerment programme" },
  { key: "2", title: "Product Package", detail: "items" },
  { key: "3", title: "Benefit", detail: "Hair dryer, Combs" },
  { key: "4", title: "Proposed Number of Beneficiaries", detail: 1122 },
  { key: "5", title: "Age Range", detail: "18-25" },
  { key: "6", title: "Number of States", detail: 3 },
  { key: "7", title: "Start Date", detail: "14th MAR. 2022" },
  { key: "8", title: "End Date", detail: "28th MAR. 2022" },
];


const CentralProgramDetailsPage = ({ navigation, route }) => {
  const focusedTab = route.params.tabFocus;

  console.log(route.params, " FROM PREV SCREEN ");

  const dataFromDashboard = route.params;

  // console.log(dataFromDashboard.)

  return (
    <SafeAreaView>
      <HeaderBar onPress={() => navigation.pop()} />
      <View style={{ padding: 20 }}>
        <Text style={{ color: "black", fontSize: 28, fontWeight: "500" }}>Programmes {focusedTab}</Text>


        <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 20, height: h - 100 }}>


          {/*{data.map((item, index) => (*/}
          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Program Name</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.name}</Text>

          </View>

          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Product
              Package</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.name}</Text>

          </View>


          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Benefits</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.status}</Text>

          </View>


          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Proposed Number of
              Beneficiaries</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.no_of_beneficiaries}</Text>

          </View>

          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Age Range</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.age_range}</Text>

          </View>

          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Number of
              States</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard?.states}</Text>

          </View>


          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>Start Date</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.start_date}</Text>

          </View>


          <View style={{ marginVertical: 10 }}>

            <Text style={{ color: "#6B57EB", fontWeight: "500", fontSize: 24, marginVertical: 4 }}>End Date</Text>
            <Text style={{
              color: "black",
              fontWeight: "400",
              fontSize: 16,
              marginVertical: 4,
            }}>{dataFromDashboard.end_date}</Text>

          </View>



          {/*))}*/}
          {focusedTab === "Requests" ?
            <View style={{ marginVertical: 50 }}>
              <CustomButton title={"Accept"} textContainerStyle={{ color: "white" }}
                            containerStyle={{ backgroundColor: "#6B57EB", marginVertical: 10 }} />
              <CustomButton onPress={() => navigation.pop()} title={"Reject"} textContainerStyle={{ color: "#6B57EB" }}
                            containerStyle={{
                              backgroundColor: "transparent",
                              marginVertical: 10,
                              borderWidth: 0.5,
                              borderColor: "#6B57EB",
                            }} />
            </View> : focusedTab === "Active" ?

              <CustomButton onPress={() => navigation.navigate("CentralViewBeneficiary", { ...data })}
                            title={"View Beneficiaries"}
                            textContainerStyle={{ color: "white" }}
                            containerStyle={{ backgroundColor: "#6B57EB", marginVertical: 50 }} /> : null
          }


        </ScrollView>

      </View>

    </SafeAreaView>
  );
};

export default CentralProgramDetailsPage;


const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // height: h,
  },
});
