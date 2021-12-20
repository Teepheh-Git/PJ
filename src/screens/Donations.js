// @flow
import React from "react";
import { Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import HeaderBar from "../components/HeaderBar";

const donations = [

  { key: "1", img: require("../../assets/donation4.png"), text: "Health Maintenance Organization (HMO)" },
  { key: "2", img: require("../../assets/donation1.png"), text: "Buy healthcare for a family " },
  { key: "3", img: require("../../assets/donation2.png"), text: "Grants to Artisans or Service providers" },
  { key: "4", img: require("../../assets/donation3.png"), text: "Sponsored items to partner communities" },

];

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const Donations = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: h * 1.5, padding:20 }}>
      {/*<HeaderBar onPress={() => navigation.pop()} />*/}

      <View style={{  }}>
        <Text style={{ fontSize: 32, color: "black", fontWeight: "600", marginVertical: 20 }}>Donations</Text>

        <FlatList
          data={donations}
          keyExtractor={item => item.key}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("GetStarted")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 75,
                backgroundColor: "#ffffff",
                marginVertical: 20,
                padding: 12,
                borderRadius: 6,
                elevation: 2,
              }}>

              <Image source={item.img} style={{ width: 41, height: 41 }} />
              <Text style={{ fontSize: 14, color: "black", fontWeight: "500", marginHorizontal: 10 }}>{item.text}</Text>

            </TouchableOpacity>


          )} />


      </View>

    </SafeAreaView>
  );
};

export default Donations;
