import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions, FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity, TouchableWithoutFeedback,
  View,
} from "react-native";
import DashBoardComponent from "../components/DashBoardComponent";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { BASE_URL } from "../config";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const data = [
  { programType: "Transport Empowerment programme", benefits: "Hair Dryer, Combs" },
  { programType: "Farmers Empowerment programme", benefits: "Rice, Combs" },
  { programType: "Hairstylist Empowerment programme", benefits: "Hair Dryer, Chairs" },
];


const CentralDashBoard = ({ navigation }) => {

  let dummyImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg";
  const user = useContext(UserContext);


  useEffect(() => {

    FetchAllPrograms();

  }, []);


  const tabs = [
    { key: "1", tabStatus: "Active", notificationNum: 3 },
    { key: "2", tabStatus: "Requests", notificationNum: 4 },
    { key: "3", tabStatus: "Accepted", notificationNum: 7 },
    { key: "4", tabStatus: "Rejected", notificationNum: 2 },
  ];

  const [notificationAvailable, setNotificationAvailable] = useState(false);


  const [approved, setApproved] = useState(false);
  const [tabFocus, setTabFocus] = useState("Active");
  const [tabStatus, setTabStatus] = useState("Active");
  const [filterStatus, setFilterStatus] = useState("running");
  const [centralPrograms, setCentralPrograms] = useState([]);

  // console.log(filterStatus, "filterSTATUS");
  // console.log(centralPrograms, "caentralPrograms");

  const notificationFilter = centralPrograms.filter(res => res.status == "running");
  const notificationFilter2 = centralPrograms.filter(res => res.status == "pending");
  const notificationFilter3 = centralPrograms.filter(res => res.status == "completed");
  const notificationFilter4 = centralPrograms.filter(res => res.status == "cancelled");


  const setTabStatusFunction = tabStatus => {
    setTabStatus(tabStatus);
    if (tabStatus === "Active") {
      // console.log("active");
      setTabFocus("Active");
      setFilterStatus("running");
    }
    if (tabStatus === "Requests") {
      setTabFocus("Requests");
      setFilterStatus("pending");

      // console.log("request");

    }
    if (tabStatus === "Accepted") {
      setTabFocus("Accepted");
      setFilterStatus("completed");

      // console.log("accepted");

    }
    if (tabStatus === "Rejected") {
      setTabFocus("Rejected");
      setFilterStatus("cancelled");

      // console.log("rejected");

    }

  };


  const FetchAllPrograms = async () => {

    await axios.get(`${BASE_URL}/programs`)
      .then(res => setCentralPrograms(res.data))
      .catch(e => console.log(e));

  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: w - 40,
        flex: 1,
        // backgroundColor:'red',
        top: 30,
        // alignItems: "center",
      }}>
        <View>
          <Text style={{
            color: "white",
            fontWeight: "600",
            fontSize: 32,
            marginBottom: 20,
          }}>Welcome {user.firstname} 👋</Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 20, lineHeight: 20, width: 260 }}>All your
            activities and
            updates are displayed here</Text>
        </View>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          height: 70,
          padding: 5,
          justifyContent: "space-between",
          // backgroundColor:'cyan'
        }}>


          <TouchableOpacity style={{justifyContent:"center"}} onPress={() => {
            // navigation.navigate("");
          }}>
            <ImageBackground source={require("../../assets/notificationBell.png")}
                             style={{ width: 21, height: 27.5, alignItems: "flex-end", marginHorizontal: 10 }}>
              {notificationAvailable &&
              <Image source={require("../../assets/Ellipse.png")} style={{ width: 9, height: 9 }} />}
            </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("CentralUserPage")}>
            <ImageBackground
              source={require("../../assets/dashImgPlaceholder.png")}
              style={{ width: 51, height: 51, borderRadius: 41 }}>
              <Image source={{ uri: dummyImage }}
                     style={{ width: 51, height: 51, borderRadius: 41 }} resizeMode={"cover"} />
            </ImageBackground>

          </TouchableOpacity>


        </View>
      </View>


      {/*BODY SECTION*/}
      <View style={{
        backgroundColor: "white",
        width: w,
        height: h / 1.2,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 20,
      }}>


        <Text style={{
          fontSize: 28,
          lineHeight: 29,
          color: "#6B57EB",
          fontWeight: "600",
          letterSpacing: 0.16,
          paddingVertical: 10,
        }}>Programmes</Text>


        {/*TAB INDICATOR SECTION*/}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
          <View
            style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: "row", alignItems: "center" }}
                              onPress={() => setTabStatusFunction(tabs[0].tabStatus)}>
              <Text style={[{
                color: "#938EA4",
                fontSize: 18,
                fontWeight: "500",
              }, tabFocus === tabs[0].tabStatus && { color: "black" }]}>{tabs[0].tabStatus} </Text>

              {notificationFilter.length !== 0 &&
              <ImageBackground source={require("../../assets/Ellipse.png")}
                               style={{
                                 width: 18,
                                 height: 18,
                                 alignItems: "center",
                                 justifyContent: "center",
                               }}>

                <Text>{notificationFilter.length}</Text>
              </ImageBackground>}

            </TouchableOpacity>

            {tabFocus === tabs[0].tabStatus && <View
              style={{ width: 80, height: 3, borderRadius: 44.24, backgroundColor: "#6B57EB", marginVertical: 5 }} />}

          </View>


          <View
            style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: "row", alignItems: "center" }}
                              onPress={() => setTabStatusFunction(tabs[1].tabStatus)}>
              <Text style={[{
                color: "#938EA4",
                fontSize: 18,
                fontWeight: "500",
              }, tabFocus === tabs[1].tabStatus && { color: "black" }]}>{tabs[1].tabStatus} </Text>


              {notificationFilter2.length !== 0 &&
              <ImageBackground source={require("../../assets/Ellipse.png")}
                               style={{
                                 width: 18,
                                 height: 18,
                                 alignItems: "center",
                                 justifyContent: "center",
                               }}>

                <Text>{notificationFilter2.length}</Text>
              </ImageBackground>}

            </TouchableOpacity>

            {tabFocus === tabs[1].tabStatus && <View
              style={{ width: 80, height: 3, borderRadius: 44.24, backgroundColor: "#6B57EB", marginVertical: 5 }} />}

          </View>


          <View
            style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: "row", alignItems: "center" }}
                              onPress={() => setTabStatusFunction(tabs[2].tabStatus)}>
              <Text style={[{
                color: "#938EA4",
                fontSize: 18,
                fontWeight: "500",
              }, tabFocus === tabs[2].tabStatus && { color: "black" }]}>{tabs[2].tabStatus} </Text>
              {notificationFilter3.length !== 0 &&
              <ImageBackground source={require("../../assets/Ellipse.png")}
                               style={{
                                 width: 18,
                                 height: 18,
                                 alignItems: "center",
                                 justifyContent: "center",
                               }}>

                <Text>{notificationFilter3.length}</Text>
              </ImageBackground>}

            </TouchableOpacity>

            {tabFocus === tabs[2].tabStatus && <View
              style={{ width: 80, height: 3, borderRadius: 44.24, backgroundColor: "#6B57EB", marginVertical: 5 }} />}

          </View>


          <View
            style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: "row", alignItems: "center" }}
                              onPress={() => setTabStatusFunction(tabs[3].tabStatus)}>
              <Text style={[{
                color: "#938EA4",
                fontSize: 18,
                fontWeight: "500",
              }, tabFocus === tabs[3].tabStatus && { color: "black" }]}>{tabs[3].tabStatus} </Text>


              {notificationFilter4.length !== 0 &&
              <ImageBackground source={require("../../assets/Ellipse.png")}
                               style={{
                                 width: 18,
                                 height: 18,
                                 alignItems: "center",
                                 justifyContent: "center",
                               }}>

                <Text>{notificationFilter4.length}</Text>
              </ImageBackground>}


            </TouchableOpacity>

            {tabFocus === tabs[3].tabStatus && <View
              style={{ width: 80, height: 3, borderRadius: 44.24, backgroundColor: "#6B57EB", marginVertical: 5 }} />}

          </View>


        </View>

        {/*FLATLIST*/}
        <FlatList
          data={centralPrograms}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {

            return (

              item.status == filterStatus &&


              <View style={{
                backgroundColor: "white",
                borderRadius: 6,
                marginVertical: 11,
                height: 99,
                padding: 21,
                elevation: 0.5,
              }}>
                <Text style={{
                  color: "#6B57EB",
                  fontSize: 18,
                  lineHeight: 18,
                  fontWeight: "500",
                }}>{item.name}</Text>
                <Text style={{ marginVertical: 10, fontWeight: "500" }}>Benefits: <Text
                  style={{ fontWeight: "400", color: "#726E7E" }}>{item.sector_id}, {item.status}</Text></Text>

                <TouchableOpacity activeOpacity={0.6} style={{ alignSelf: "flex-end" }}
                                  onPress={() => navigation.navigate("CentralProgramDetailsPage", { tabFocus, ...item })}>
                  <Text style={{ color: "#F5B85C", fontWeight: "400" }}>View details</Text>
                </TouchableOpacity>
              </View>


            );


          }} />


      </View>


    </SafeAreaView>
  );
};

export default CentralDashBoard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#6B57EB",
    // bottom: 40,
    // height: h,
  },
});
