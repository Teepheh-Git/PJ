import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DashBoardComponent from "../components/DashBoardComponent";
import { UserContext } from "../context/UserContext";
import CustomButton from "../components/CustomButton";
import UserDashBoardComponent from "../components/UserDashBoardComponent";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const DashBoard = ({ navigation }) => {

  const user = useContext(UserContext);

  // console.log(user, " can u see user data in dashboard");

  let dummyImage = "null";


  const [notificationAvailable, setNotificationAvailable] = useState(false);


  const [approved, setApproved] = useState(false);


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
        <View style={{}}>
          <Text style={{
            color: "white",
            fontWeight: "400",
            fontSize: 30,
            marginBottom: 20,
            // fontFamily:'Gilroy-Light'
          }}>Welcome {user.firstname} 👋</Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 20, width: 200 }}>All your
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


        <UserDashBoardComponent
          sector={"Transport"}
          benefit={"Insurance"}
          currentStatus={"pending" !== "pending" ? "Approved" : "Pending"}
          backgroundColorType={"pending" !== "pending" ? "#D1FFC6" : "#FFF9C6"}
          textColorType={"pending" !== "pending" ? "#239B05" : "#F68820"}
          containerStyle={{ bottom: 30, borderRadius: 5 }}
          // imageUri={item.status !== "pending" ? require("../../assets/approved.png") : require("../../assets/pending.png")}
        />


        {/*<CustomButton*/}

        {/*  onPress={() => navigation.navigate("GetStarted")}*/}
        {/*  textContainerStyle={{*/}
        {/*    color: "white",*/}
        {/*  }}*/}
        {/*  containerStyle={{*/}
        {/*    top: 350,*/}
        {/*    backgroundColor: "#6B57EB",*/}
        {/*  }}*/}
        {/*  title={"Apply for Benefit"} />*/}

      </View>


    </SafeAreaView>
  );
};

export default DashBoard;


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
