// @flow
import React, { useContext } from "react";
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
import CustomButton from "../components/CustomButton";
import { UserContext } from "../context/UserContext";
import HeaderBar from "../components/HeaderBar";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


let dummyImage = "null";

const DistributorProfile = ({ navigation }) => {


  const user = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        // flexDirection: "row",
        // justifyContent: "space-between",
        width: w - 40,
        flex: 1,
        // alignItems: "center",
      }}>
        <View>
          <TouchableOpacity onPress={() => navigation.pop()} style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            alignSelf: "flex-start",
          }}>

            <Image style={{ height: 15, width: 10, tintColor: "white" }} resizeMode={"center"}
                   source={require("../../assets/leftArrow.png")} />
            <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}> Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          // flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "red",
          alignSelf: "center",
        }}>

          <Text style={{ color: "white", fontSize: 32, fontWeight: "500", marginBottom: 30 }}>Profile</Text>

          <ImageBackground
            source={require("../../assets/dashImgPlaceholder.png")}
            style={{ width: 130, height: 130, borderRadius: 130 }}>
            <Image source={{ uri: dummyImage }}
                   style={{ width: 130, height: 130, borderRadius: 130 }} resizeMode={"cover"} />
          </ImageBackground>

          <TouchableOpacity style={{ alignSelf: "flex-end", bottom: 40, margin: 10 }}>
            <Image source={require("../../assets/cameraIcon.png")} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>


        </View>
      </View>

      <View style={{
        backgroundColor: "white",
        width: w,
        height: h / 1.45,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 20,
      }}>

        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "400", opacity: 0.5 }}>Full Name</Text>
          <Text style={{ color: "black", fontSize: 24 }}>{user.firstname} {user.lastname}</Text>
        </View>

        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "400", opacity: 0.5 }}>Phone Number</Text>
          <Text style={{ color: "black", fontSize: 24 }}>{user.username}</Text>
        </View>

        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "400", opacity: 0.5 }}>Email Address</Text>
          <Text style={{ color: "black", fontSize: 24 }}>{user.email}</Text>
        </View>


        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "400", opacity: 0.5 }}>Date of Birth</Text>
          <Text style={{ color: "black", fontSize: 24 }}>{user.dob}</Text>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default DistributorProfile;


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
