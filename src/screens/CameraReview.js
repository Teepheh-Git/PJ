import React, { useContext, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { BASE_URL } from "../config";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { requests } from "../graphql/queries";
import { handleQuery } from "../graphql/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sleep } from "../utils/sleep";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const CameraReview = ({ route, navigation }) => {

  const [isLoading, setIsLoading] = useState(false);

  const user = useContext(UserContext);

  const ImageFromCapture = route.params;
  console.log(ImageFromCapture.data.uri);


  const UploadIdentificationImage = async () => {

    const formData = new FormData();
    formData.append("file", ImageFromCapture.data.uri);


    try {

      let res = await axios({
        method: "POST",
        url: `${BASE_URL}/upload`,
        data: formData,
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",

        },
      });


      // let res = await axios.post(`${BASE_URL}/upload/`, formData, {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //     "Content-Type": "application/json",
      //   },
      // });


      if (res) {
        console.warn(">>>UPLOADMM>>>> ", res.data[0].url);

        // UploadNow(res.data[0].url);
      }
    } catch (e) {
      console.log(e.message, "Errorrrrrrrrrrsss");
    }
  };


  const UploadNow = async (link) => {

    try {

      let query = requests.mutation(`updateUser(input:{where:{id: ${user.id}}, data:{
                photo:"${link}"
                
                    }}){
                     user{
                       id
                       photo
                     }
                    }`);
      console.log("<<>>", query);

      let { data } = await handleQuery(query, user.token);

      console.warn("data>>>>>>YYYYY", data.updateUser.user.photo);

    } catch (e) {
      console.warn("e", e);
      console.warn("e", e.response);
    }
  };


  return (
    <SafeAreaView style={styles.container}>

      <Image source={{ uri: ImageFromCapture.data.uri }} style={{ width: 268, height: 268 }}
             resizeMode={"cover"} />


      <Text style={{ marginVertical: 23, color: "#000000", fontSize: 16, lineHeight: 20, fontWeight: "400" }}>Photo
        taken and identity verified</Text>

      <CustomButton title={"Save and continue"}
                    loading={isLoading}
                    onPress={() => {
                      try {
                        setIsLoading(true);
                        setTimeout(() => {
                          AsyncStorage.setItem("@userFirstTime", "true").then(navigation.navigate("UserCompleteProfile1"));

                        }, 2000);
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                    textContainerStyle={{
                      color: "white",
                    }}
                    containerStyle={{
                      backgroundColor: "#6B57EB",
                      marginVertical: 30,
                    }} />

    </SafeAreaView>
  );

};
export default CameraReview;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: h,
  },
});
