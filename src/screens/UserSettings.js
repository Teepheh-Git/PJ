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
import { Switch } from "react-native-switch";
import DashBoardComponent from "../components/DashBoardComponent";
import CustomButton from "../components/CustomButton";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const DistributorSettings = ({ navigation }) => {

  let dummyImage = null;
  const { logout } = useContext(AuthContext);
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
        <View style={{
          paddingVertical: 30,
        }}>
          <Text style={{ color: "white", fontSize: 32, fontWeight: "600", letterSpacing: 0.16 }}>Settings</Text>
        </View>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          // backgroundColor: "red",
        }}>


          <ImageBackground
            source={require("../../assets/dashImgPlaceholder.png")}
            style={{ width: 70, height: 70, borderRadius: 41 }}>
            <Image source={{ uri: dummyImage }}
                   style={{ width: 70, height: 70, borderRadius: 41 }} resizeMode={"cover"} />
          </ImageBackground>

          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ fontSize: 28, color: "white", fontWeight: "500" }}>{user.firstname} {user.lastname}</Text>

            <TouchableOpacity onPress={() => navigation.navigate("UserPage")}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "300" }}>View Profile</Text>

            </TouchableOpacity>
          </View>
        </View>


      </View>

      <View style={{
        backgroundColor: "white",
        width: w,
        height: h / 1.25,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 20,
        paddingVertical: 40,
      }}>

        <View style={{ marginVertical: 10 }}>


          <TouchableOpacity style={{
            padding: 20,
            height: 75,
            width: w - 40,
            backgroundColor: "white",
            borderRadius: 6,
            elevation: 1,
            marginVertical: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Image source={require("../../assets/lock.png")} style={{ width: 43, height: 43 }} />
            <Text style={{ color: "black", fontWeight: "300", fontSize: 22, right: 60 }}>Change Password</Text>

            <Image source={require("../../assets/arrowRight.png")} resizeMode={"center"}
                   style={{ width: 8, height: 14 }} />

          </TouchableOpacity>


          <View style={{
            padding: 20,
            height: 75,
            width: w - 40,
            backgroundColor: "white",
            borderRadius: 6,
            elevation: 1,
            marginVertical: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Image source={require("../../assets/notificationProfile.png")} style={{ width: 43, height: 43 }} />
            <Text style={{ color: "black", fontWeight: "300", fontSize: 22, right: 60 }}>Notification</Text>

            <Switch
              value={true}
              onValueChange={(val) => console.log(val)}
              disabled={false}
              activeText={"On"}
              inActiveText={"Off"}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={3}
              backgroundActive={"#6B57EB"}
              backgroundInactive={"gray"}
              circleActiveColor={"white"}
              circleInActiveColor={"white"}
              changeValueImmediately={true}
              // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
              // changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{
                alignItems: "center",
                justifyContent: "center",
              }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />

          </View>
          <TouchableOpacity

            onPress={async () => {

              try {
                await logout();
                navigation.navigate("AuthStack");

              } catch (e) {
                console.log(e.message);
              }

            }}

            style={{
              padding: 20,
              height: 75,
              width: w - 40,
              backgroundColor: "white",
              borderRadius: 6,
              elevation: 1,
              marginVertical: 10,
              // justifyContent: "space-between",

              flexDirection: "row",
              alignItems: "center",
            }}>
            <Image source={require("../../assets/lock.png")} style={{ width: 43, height: 43 }} />
            <Text style={{ color: "black", fontWeight: "300", fontSize: 22, marginHorizontal: 30 }}>Logout</Text>

          </TouchableOpacity>


        </View>

      </View>


    </SafeAreaView>
  );
};

export default DistributorSettings;


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
