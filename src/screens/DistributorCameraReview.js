import React, { useContext, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { BASE_URL } from "../config";
import { sleep } from "../utils/sleep";
import AsyncStorage from "@react-native-async-storage/async-storage";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const DistributorCameraReview = ({ route, navigation }) => {

  const [isLoading, setIsLoading] = useState(false);

  const ImageFromCapture = route.params;

  // console.log(ImageFromCapture.filePath);


  const [imageFromCamera, setImageFromCamera] = useState(null);


  // setImageFromCamera(ImageFromCapture.filePath);


  const user = useContext(UserContext);


  const UploadImage = async () => {

    const data = new FormData();
    data.append("files", ImageFromCapture.filePath);


    try {
      const upload_res = await axios({
        method: "POST",
        url: `${BASE_URL}/upload`,
        data: data,
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(upload_res, "FILE REQ");
    } catch (e) {
      console.log(e, "UPLOAD ERRORRRRR");
    }


  };

  return (
    <SafeAreaView style={styles.container}>

      <Image source={{ uri: ImageFromCapture.filePath }} style={{ width: 268, height: 268 }}
             resizeMode={"cover"} />


      <Text style={{ marginVertical: 23, color: "#000000", fontSize: 16, lineHeight: 20, fontWeight: "400" }}>Photo
        taken and identity verified</Text>

      <CustomButton title={"Save and continue"}
                    loading={isLoading}
                    onPress={() => {
                      try {
                        setIsLoading(true);
                        setTimeout(() => {
                          AsyncStorage.setItem("@distributorFirstTime", "true").then(navigation.navigate("DistributorCompleteProfile"));
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
export default DistributorCameraReview;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: h,
  },
});
