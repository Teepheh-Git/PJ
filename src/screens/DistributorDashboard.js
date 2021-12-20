import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DashBoardComponent from "../components/DashBoardComponent";
import CustomButton from "../components/CustomButton";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { BASE_URL } from "../config";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const DistributorDashBoard = ({ navigation }) => {

  const user = useContext(UserContext);


  useEffect(() => {

    FetchPrograms();

  }, []);

  console.log(user);

  let dummyImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg";


  const [notificationAvailable, setNotificationAvailable] = useState(false);


  const [approved, setApproved] = useState(false);
  const [programData, setProgramData] = useState([]);


  const FetchPrograms = async () => {

    await axios.get(`${BASE_URL}/programs`)
      .then(res => setProgramData(res.data))
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


          <TouchableOpacity
            style={{justifyContent:'center',}}

            onPress={() => {
            navigation.navigate("DistributorNotification");
          }}>
            <ImageBackground source={require("../../assets/notificationBell.png")}
                             style={{ width: 21, height: 27.5, alignItems: "flex-end", marginHorizontal: 10 }}>
              {notificationAvailable &&
              <Image source={require("../../assets/Ellipse.png")} style={{ width: 9, height: 9 }} />}
            </ImageBackground>
          </TouchableOpacity>


          <View >
            <ImageBackground
              source={require("../../assets/dashImgPlaceholder.png")}
              style={{ width: 51, height: 51, borderRadius: 41 }}>
              <Image source={{ uri: dummyImage }}
                     style={{ width: 51, height: 51, borderRadius: 41 }} resizeMode={"cover"} />
            </ImageBackground>

          </View>


        </View>
      </View>


      <View style={{
        backgroundColor: "white",
        width: w,
        height: h / 1.2,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 20,
      }}>


        <FlatList
          showsVerticalScrollIndicator={false}
          data={programData}
          ListFooterComponent={


            <View style={{ marginBottom:40}}/>


          }

          renderItem={({ item, index }) => (

            <DashBoardComponent
              ifDistributor={true}
              sector={item.name}
              benefit={item.no_of_beneficiaries}
              currentStatus={item.status !== "pending" ? "Approved" : "Pending"}
              backgroundColorType={item.status !== "pending" ? "#D1FFC6" : "#FFF9C6"}
              textColorType={item.status !== "pending" ? "#239B05" : "#F68820"}
              // imageUri={item.status !== "pending" ? require("../../assets/approved.png") : require("../../assets/pending.png")}
            />

          )} />


        {/*<DashBoardComponent*/}
        {/*  ifDistributor={true} sector={"Transport Worker"} benefit={"Insurance"}*/}
        {/*  imageUri={approved ? require("../assets/approved.png") : require("../assets/pending.png")} />*/}


        <CustomButton

          onPress={() => navigation.navigate("DistributorCreateProgram")}
          textContainerStyle={{
            color: "white",
          }}
          containerStyle={{
            top: 350,
            backgroundColor: "#6B57EB",
          }}
          title={"create new programme"} />


      </View>


    </SafeAreaView>
  );
};

export default DistributorDashBoard;


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
