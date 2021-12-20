"use strict";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import CustomButton from "../components/CustomButton";
import { useCamera } from "react-native-camera-hooks";


const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#ffffff",
      width: w,
      justifyContent: "center",
      alignItems: "center",

    }}
  >
    <Text style={{ color: "black" }}>Waiting</Text>
  </View>
);


const Camera = ({ navigation }) => {


  const [{ cameraRef }, { takePicture }] = useCamera(null);


  const captureHandle = async () => {
    try {
      const data = await takePicture();
      const filePath = data.uri;
      console.log(data, "Image data");
      navigation.navigate("CameraReview", { data });

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      >


        {({ status }) => {
          if (status !== "READY") return <PendingView />;
          return (
            <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>

              <CustomButton
                onPress={() => captureHandle()}
                title={"Take a photo"}
                containerStyle={{
                  backgroundColor: "#6B57EB",
                  marginVertical: 20,
                }}
                textContainerStyle={{
                  color: "white",
                }} />

            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default Camera;






