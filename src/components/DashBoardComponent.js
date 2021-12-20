import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


export const DashBoardComponent = ({
                                     sector,
                                     benefit,
                                     textColorType,
                                     ifDistributor,
                                     currentStatus,
                                     backgroundColorType,

                                   }) => {
  return (
    <View style={{

      width: w - 40,
      height: 180,
      borderRadius: 6,
      backgroundColor: "white",
      // backgroundColor: "cyan",
      shadowOffset: 0.2,
      elevation: 1.3,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,

    }}>

      {ifDistributor &&
      <View style={{ alignSelf: "flex-start" }}>
        <Text style={{ color: "black", fontSize: 24, fontWeight: "500" }}>Programme created</Text>
        <Text style={{ color: "black", fontSize: 16 }}>{sector}</Text>
      </View>
      }

      <View style={{
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        width: w - 80,
        justifyContent: "space-between",
        height: 100,
      }}>


        <View style={{ justifyContent: "space-evenly" }}>
          <Text style={{
            color: "#6B57EB",
            fontSize: 24,
            fontWeight: "500",
            letterSpacing: 0.16,
            // marginVertical:5
            marginTop: 20,

          }}>Sector</Text>

          <Text style={{ color: "black", fontSize: 14, fontWeight: "400", marginBottom: 5 }}>{sector}</Text>


          <Text style={{
            color: "#6B57EB",
            fontSize: 24,
            fontWeight: "500",
            letterSpacing: 0.16,
            marginTop: 5,
          }}>Benefit</Text>


          <Text style={{ color: "black", fontSize: 14, fontWeight: "400" }}>{benefit}</Text>
        </View>
        {/*<Image source={imageUri} style={{ width: 90, height: 23, alignSelf: "flex-start" }} />*/}

        <View style={{
          width: 80,
          height: 28,
          borderRadius: 5,
          backgroundColor: backgroundColorType,
          justifyContent: "center",
          alignItems: "center",
          bottom: 80,
        }}>

          <Text style={{ fontWeight: "500", fontSize: 16, color: textColorType }}>{currentStatus}</Text>
        </View>


      </View>


    </View>


  );
};


export default DashBoardComponent;
