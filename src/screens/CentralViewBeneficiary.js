import React from "react";
import { Dimensions, FlatList, Image, ImageBackground, Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import CustomButton from "../components/CustomButton";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const users = [
  {
    name: "Adedayo Agnes",
    email: "AdedayoAgnes@gmail.com",
    imageUri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg",
  },
  {
    name: "Kubura Sabdat ",
    email: "Ifunanyaakeemo@gmail.com",
    imageUri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg",
  },
  {
    name: "Ifunanya Akeem",
    email: "AdedayoAgnes@gmail.com",
    imageUri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  },
  {
    name: "Aminu Ehigiator",
    email: "KuburaSabdat@gmail.com",
    imageUri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
  },
];


const CentralViewBeneficiary = ({ navigation }) => {


  return (
    <View style={{backgroundColor:'white'}}>
      <HeaderBar onPress={() => navigation.pop()} />

      <View style={{ padding: 20 }}>
        <Text style={{ color: "black", fontSize: 34, fontWeight: "500", letterSpacing: 0.16 }}>Hairstylist Empowerment
          programme</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 40 }}>

          <Text style={{ fontSize: 24, fontWeight: "500", color: "#6B57EB" }}>Beneficiaries</Text>

          <ImageBackground resizeMode={"cover"}
                           style={{ width: 40, height: 18, justifyContent: "center", alignItems: "center" }}
                           source={require("../../assets/recEllipse.png")}>
            <Text style={{ color: "white" }}>{users.length}</Text>
          </ImageBackground>

        </View>


        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}

          ListFooterComponent={

            <View style={{marginBottom:h/1.7}}/>
          }

          renderItem={({ item, index }) => {
            return (
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
                height: 64,
                backgroundColor:'white',
                padding: 10,
                borderRadius: 6,
                elevation: 0.7,
              }}>

                <Image source={{ uri: item.imageUri }} style={{ width: 41, height: 41, borderRadius: 41 }} />

                <View style={{ right: 50 }}>
                  <Text style={{ color: "black", fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ color: "#6B57EB" }}>{item.email}</Text>
                </View>

                <CustomButton containerStyle={{ width: 57, height: 32, backgroundColor: "#6B57EB" }}
                              textContainerStyle={{ color: "white", fontSize: 10 }} title={"View Detail"} />

              </View>
            );

          }} />


      </View>


    </View>
  );
};

export default CentralViewBeneficiary;
