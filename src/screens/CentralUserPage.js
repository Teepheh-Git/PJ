import React, { useContext } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const CentralUserPage = ({ navigation }) => {

  const user = useContext(UserContext);
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar onPress={() => navigation.pop()} />

      <View style={{ padding: 20 }}>
        <Text style={{ color: "black", fontWeight: "600", fontSize: 34 }}>My Details</Text>

        <Text>{user.username}</Text>
        <Text>{user.firstname}</Text>
        <Text>{user.type}</Text>

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
        style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Text style={{ color: "black", fontSize: 32, fontWeight: "500" }}>Logout</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
};


export default CentralUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // bottom: 40,
    height: h,
  },
});

