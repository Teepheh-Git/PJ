import React, { useState } from "react";
import {
  Dimensions,
  Image, ImageBackground,
  ImageBackgroundComponent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImagePicker, { launchImageLibrary } from "react-native-image-picker";
import CustomButton from "../components/CustomButton";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


const ApplyForBenefitImageUpload = ({ navigation }) => {

  const [filePath, setFilePath] = useState("...");
  const [filePath2, setFilePath2] = useState("...");
  const [isLoading, setIsLoading] = useState(false);


  const chooseFile = () => {
    let options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose Photo from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log(
          "User tapped custom button: ",
          response.customButton,
        );
        alert(response.customButton);
      } else {
        let source = response.assets[0].uri;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });


  };


  const chooseFile2 = () => {
    let options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose Photo from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log(
          "User tapped custom button: ",
          response.customButton,
        );
        alert(response.customButton);
      } else {
        let source2 = response.assets[0].uri;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath2(source2);
      }
    });


  };

  return (
    <SafeAreaView style={styles.container}>


      <View>

        <Text style={{
          fontWeight: "500", fontSize: 24, color: "black"
          , lineHeight: 29.11, letterSpacing: 0.1, marginVertical: 4,
        }}>Apply for Benefit</Text>
        <Text style={{
          fontWeight: "400",
          fontSize: 16,
          lineHeight: 20,
          letterSpacing: 0.1,
          marginVertical: 4,
          opacity: 0.5,
          color: "black",
          marginBottom: 20,

        }}>Provide the following information to verify your business</Text>


        <Text style={{
          fontSize: 16, fontWeight: "500", letterSpacing: 0.16, marginVertical: 20, color: "black",
        }}>Upload the picture of
          your truck</Text>

        <TouchableOpacity style={{
          width: w - 40, height: 182, borderRadius: 8,
        }} activeOpacity={0.6} onPress={() => chooseFile()}>
          <ImageBackground source={require("../../assets/imagePlaceholder.png")}
                           style={{ width: w - 40, height: 182, borderRadius: 8 }}>

            <Image
              style={{ width: w - 40, height: 182 }}
              source={{ uri: filePath }} />


          </ImageBackground>
        </TouchableOpacity>

        <Text style={{
          fontSize: 16, fontWeight: "500", letterSpacing: 0.16, marginVertical: 20, color: "black",
        }}>Upload drivers
          license</Text>


        <TouchableOpacity style={{
          width: w - 40, height: 182, borderRadius: 8,
        }} activeOpacity={0.6} onPress={() => chooseFile2()}>


          <ImageBackground
            source={require("../../assets/imagePlaceholder.png")}
            resizeMode={"cover"}
            style={{ width: w - 40, height: 182, borderRadius: 8 }}>


            <Image
              style={{ width: w - 40, height: 182 }}
              source={{ uri: filePath2 }} />


          </ImageBackground>


        </TouchableOpacity>

      </View>

      <CustomButton
        onPress={() => {
          setIsLoading(true);

          setTimeout(() => {
            navigation.navigate("ApplicationSubmitted");

          }, 4000);


        }}
        loading={isLoading}

        title={"Submit"}
        textContainerStyle={{
          color: "white",
        }}
        containerStyle={{
          backgroundColor: "#6B57EB",
          marginVertical: 74,
        }} />


    </SafeAreaView>
  );
};

export default ApplyForBenefitImageUpload;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: "black",
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

