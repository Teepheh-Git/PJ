import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, Image, TouchableOpacity } from "react-native";
import SplashScreen from "react-native-splash-screen";
import UserSignUp from "./src/screens/UserSignUp";
import CustomButton from "./src/components/CustomButton";
import Welcome from "./src/screens/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import DistributorSignUp from "./src/screens/DistributorSignUp";
import CentralSignUp from "./src/screens/CentralSignUp";
import AccountCreated from "./src/screens/AccountCreated";
import FaceIdentification from "./src/screens/FaceIdentification";
import Camera from "./src/screens/Camera";
import CameraReview from "./src/screens/CameraReview";
import UserCompleteProfile1 from "./src/screens/UserCompleteProfile1";
import UserCompleteProfile2 from "./src/screens/UserCompleteProfile2";
import ProfileCompleted from "./src/screens/ProfileCompleted";
import GetStarted from "./src/screens/GetStarted";
import ReviewChoice from "./src/screens/ReviewChoice";
import ApplyForBenefitImageUpload from "./src/screens/ApplyForBenefitImageUpload";
import ApplicationSubmitted from "./src/screens/ApplicationSubmitted";
import DashBoard from "./src/screens/DashBoard";
import Notification from "./src/screens/Notification";
import DistributorAccountCreated from "./src/screens/DistributorAccountCreated";
import DistributorFaceIdentification from "./src/screens/DistributorFaceIdentification";
import DistributorCamera from "./src/screens/DistributorCamera";
import DistributorCameraReview from "./src/screens/DistributorCameraReview";
import DistributorCompleteProfile from "./src/screens/DistributorCompleteProfile";
import DistributorProfileCompleted from "./src/screens/DistributorProfileCompleted";
import DistributorCreateProgram from "./src/screens/DistributorCreateProgram";
import DistributorCreateProgram2 from "./src/screens/DistributorCreateProgram2";
import ProgrammeSubmitted from "./src/screens/ProgrammeSubmitted";
import { DistributorNotification } from "./src/screens/DistributorNotification";
import CentralLogin from "./src/screens/CentralLogin";
import CentralDashBoard from "./src/screens/CentralDashBoard";
import CentralProgramDetailsPage from "./src/screens/CentralProgramDetailsPage";
import CentralViewBeneficiary from "./src/screens/CentralViewBeneficiary";
import { AuthContext } from "./src/context/AuthContext";
import axios from "axios";
import { BASE_URL, GRAPHQL_URL } from "./src/config";
import { createAction } from "./src/utils/createAction";
import { useAuth } from "./src/hooks/useAuth";
import { UserContext } from "./src/context/UserContext";
import UserPage from "./src/screens/UserPage";
import DistributorUserPage from "./src/screens/DistributorUserPage";
import CentralUserPage from "./src/screens/CentralUserPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import SplashScreenDummy from "./src/screens/SplashScreen";
import DistributorDashBoard from "./src/screens/DistributorDashboard";
import Donations from "./src/screens/Donations";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DistributorSettings from "./src/screens/DistributorSettings";
import DistributorProfile from "./src/screens/DistributorProfile";
import UserSettings from "./src/screens/UserSettings";


const AuthStack = createStackNavigator();
const UserStack = createStackNavigator();
const DistributorStack = createStackNavigator();
const CentralStack = createStackNavigator();
const RootStack = createStackNavigator();

// const cache = new InMemoryCache();
//
//
// const client = new ApolloClient({
//   uri: GRAPHQL_URL,
//   cache: cache,
//
// })


const App = () => {
  const { auth, state } = useAuth();


  useEffect(() => {
    SplashScreen.hide();


    CheckUserFirstTimeLogin();
    CheckDistributorFirstTimeLogin();

  }, []);

  const [notUserFirstTime, setNotUserFirstTime] = useState(false);
  const [notDistributorFirstTime, setNotDistributorFirstTime] = useState(false);

  // console.log(state.user.type, " STATEEE");


  const CheckUserFirstTimeLogin = async () => {
    try {
      const value = await AsyncStorage.getItem("@userFirstTime");
      if (value !== null) {
        setNotUserFirstTime(true);
      }
    } catch (error) {
      console.log("Error @userFirstTime: ", error);
    }
  };

  const CheckDistributorFirstTimeLogin = async () => {
    try {
      const value = await AsyncStorage.getItem("@distributorFirstTime");
      if (value !== null) {
        setNotDistributorFirstTime(true);
      }
    } catch (error) {
      console.log("Error @distributorFirstTime: ", error);
    }
  };

  // const Tab = createBottomTabNavigator();
  //
  // const DistributorBottomTab = () => {
  //   return (
  //     <Tab.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}>
  //       <Tab.Screen name="DistributorDashBoard" component={DistributorDashBoard} />
  //       <Tab.Screen name="Donations" component={Donations} />
  //       <Tab.Screen name="DistributorNotification" component={DistributorNotification} />
  //       <Tab.Screen name="DistributorSettings" component={DistributorSettings} />
  //     </Tab.Navigator>
  //   );
  // };


  const TabBarCustomButton = ({ children, onPress }) => {

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}>

        {children}

      </TouchableOpacity>
    );
  };


  const Tab = createBottomTabNavigator();

  const DistributorBottomTabs = ({ navigation }) => {

    return (
      <Tab.Navigator
        detachInactiveScreens
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingHorizontal: 15,
            right: 0,
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
            elevation: 5,
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 5,
              height: -3,
            },
            // backgroundColor: "cyan",
            borderTopColor: "rgba(175,174,174,0.7)",
            height: Platform.OS === "android" ? 85 : 100,
          },


        }}>
        <Tab.Screen name="DistributorDashBoard" component={DistributorDashBoard}
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <Image source={require("./assets/homeIcon.png")}
                               resizeMode={"center"}

                               style={{ width: 24, height: 24 }} />
                      ),
                    }}
        />
        <Tab.Screen
          name="Donations"
          component={Donations}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require("./assets/donationIcon.png")}
                     resizeMode={"center"}

                     style={{ width: 24, height: 24 }} />
            ),
          }} />
        <Tab.Screen name="DistributorCreateProgram" component={DistributorCreateProgram}

                    options={{
                      tabBarIcon: ({ focused }) => {
                        return (
                          <View
                            style={{
                              alignItems: "center",
                              height: 50,
                              justifyContent: "space-around",
                              elevation: 7,
                              shadowOpacity: 0.1,
                              shadowOffset: {
                                width: 4,
                                height: 5,
                              },
                            }}>
                            <View
                              style={{
                                width: 70,
                                height: 70,
                                alignItems: "center",
                                justifyContent: "center",
                                bottom: 30,
                                borderRadius: 35,

                              }}
                            >
                              <Image
                                source={require("./assets/addIcon.png")}
                                resizeMode={"center"}

                                style={{ width: 53, height: 53 }}
                              />
                            </View>
                          </View>
                        );
                      },

                      tabBarButton: (props) => (
                        <TabBarCustomButton
                          {...props}
                          onPress={() => navigation.navigate("DistributorCreateProgram")}
                        />
                      ),

                    }}

        />
        <Tab.Screen
          name="DistributorNotification"
          component={DistributorNotification}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require("./assets/notificationIcon.png")}
                     resizeMode={"center"}

                     style={{ width: 24, height: 24 }} />
            ),
          }}
        />
        <Tab.Screen name="DistributorSettings" component={DistributorSettings}
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <Image source={require("./assets/settingsIcon.png")}
                               resizeMode={"center"}
                               style={{ width: 24, height: 24 }} />
                      ),
                    }} />
      </Tab.Navigator>
    );
  };


  const UserBottomTabs = ({ navigation }) => {

    return (
      <Tab.Navigator
        detachInactiveScreens
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingHorizontal: 15,
            right: 0,
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
            elevation: 5,
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 5,
              height: -3,
            },
            // backgroundColor: "cyan",
            borderTopColor: "rgba(175,174,174,0.7)",
            height: Platform.OS === "android" ? 85 : 100,
          },


        }}>
        <Tab.Screen name="DashBoard" component={DashBoard}
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                          <Image source={require("./assets/homeIcon.png")}
                                 resizeMode={"center"}

                                 style={{ width: 24, height: 24 }} />

                          <Text style={{color:"#6B57EB"}}>Dashboard</Text>
                        </View>
                      ),
                    }}
        />
        <Tab.Screen
          name="Donations"
          component={Donations}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image source={require("./assets/donationIcon.png")}
                       resizeMode={"center"}

                       style={{ width: 24, height: 24 }} />

                <Text style={{color:"#6B57EB"}}>Donations</Text>
              </View>
            ),
          }} />
        <Tab.Screen name="GetStarted" component={GetStarted}

                    options={{
                      tabBarIcon: ({ focused }) => {
                        return (
                          <View
                            style={{
                              alignItems: "center",
                              height: 50,
                              justifyContent: "space-around",
                              elevation: 7,
                              shadowOpacity: 0.1,
                              shadowOffset: {
                                width: 4,
                                height: 5,
                              },
                            }}>
                            <View
                              style={{
                                width: 70,
                                height: 70,
                                alignItems: "center",
                                justifyContent: "center",
                                bottom: 30,
                                borderRadius: 35,

                              }}
                            >
                              <Image
                                source={require("./assets/addIcon.png")}
                                resizeMode={"center"}

                                style={{ width: 53, height: 53 }}
                              />
                            </View>
                          </View>
                        );
                      },

                      tabBarButton: (props) => (
                        <TabBarCustomButton
                          {...props}
                          onPress={() => navigation.navigate("GetStarted")}
                        />
                      ),

                    }}

        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={{ alignItems: "center" }} >
              < Image source={require("./assets/notificationIcon.png")}
                resizeMode={"center"}
                style={{width: 24, height: 24}} />
                <Text style={{color:"#6B57EB"}}>Notifications</Text>

                </View>
                ),
              }}
            />
            <Tab.Screen name="UserSettings" component={UserSettings}
            options={{
            tabBarIcon: ({focused}) => (

              <View style={{ alignItems: "center" }} >

            <Image source={require("./assets/settingsIcon.png")}
            resizeMode={"center"}
            style={{width: 24, height: 24}} />
                <Text style={{color:"#6B57EB"}}>Settings</Text>

              </View>

            ),
          }} />
            </Tab.Navigator>
            );
          };


            const AuthStackNavigator = () => {
            return (
            <AuthStack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
            <AuthStack.Screen name="Welcome" component={Welcome} />
            <AuthStack.Screen name="UserSignUp" component={UserSignUp} />
            <AuthStack.Screen name="DistributorSignUp" component={DistributorSignUp} />
            <AuthStack.Screen name="CentralSignUp" component={CentralSignUp} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="CentralLogin" component={CentralLogin} />
            <AuthStack.Screen name="AccountCreated" component={AccountCreated} />
            <AuthStack.Screen name="DistributedAccountCreated" component={DistributorAccountCreated} />
            </AuthStack.Navigator>
            );
          };


            const UserStackNavigator = () => {
            return (
            <UserStack.Navigator
            initialRouteName={notUserFirstTime ? "UserBottomTabs" : "FaceIdentification"}
            screenOptions={{
            headerShown: false,
          }}>
            <UserStack.Screen name="UserBottomTabs" component={UserBottomTabs} />
            <UserStack.Screen name="UserPage" component={UserPage} />
            <UserStack.Screen name="FaceIdentification" component={FaceIdentification} />
            <UserStack.Screen name="Camera" component={Camera} />
            <UserStack.Screen name="CameraReview" component={CameraReview} />
            <UserStack.Screen name="UserCompleteProfile1" component={UserCompleteProfile1} />
            <UserStack.Screen name="UserCompleteProfile2" component={UserCompleteProfile2} />
            <UserStack.Screen name="ProfileCompleted" component={ProfileCompleted} />
            <UserStack.Screen name="GetStarted" component={GetStarted} />
            <UserStack.Screen name="ReviewChoice" component={ReviewChoice} />
            <UserStack.Screen name="ApplyForBenefitImageUpload" component={ApplyForBenefitImageUpload} />
            <UserStack.Screen name="ApplicationSubmitted" component={ApplicationSubmitted} />
            <UserStack.Screen name="Notification" component={Notification} />
            <UserStack.Screen name="Donations" component={Donations} />
            </UserStack.Navigator>
            );
          };


            const DistributorStackNavigator = () => {
            return (
            <DistributorStack.Navigator
            initialRouteName={notDistributorFirstTime ? "DistributorBottomTabs" : "DistributorFaceIdentification"}
            screenOptions={{
            headerShown: false,
          }}>
            <DistributorStack.Screen name="DistributorBottomTabs" component={DistributorBottomTabs} />
            <DistributorStack.Screen name="DistributorUserPage" component={DistributorUserPage} />
            <DistributorStack.Screen name="DistributorFaceIdentification" component={DistributorFaceIdentification} />
            <DistributorStack.Screen name="DistributorCameraReview" component={DistributorCameraReview} />
            <DistributorStack.Screen name="DistributorAccountCreated" component={DistributorAccountCreated} />
            <DistributorStack.Screen name="DistributorCompleteProfile" component={DistributorCompleteProfile} />
            <DistributorStack.Screen name="DistributorProfileCompleted" component={DistributorProfileCompleted} />
            <DistributorStack.Screen name="DistributorCreateProgram" component={DistributorCreateProgram} />
            <DistributorStack.Screen name="DistributorCreateProgram2" component={DistributorCreateProgram2} />
            <DistributorStack.Screen name="DistributorNotification" component={DistributorNotification} />
            <DistributorStack.Screen name="DistributorCamera" component={DistributorCamera} />
            <DistributorStack.Screen name="ProgrammeSubmitted" component={ProgrammeSubmitted} />
            <DistributorStack.Screen name="DistributorProfile" component={DistributorProfile} />
            </DistributorStack.Navigator>
            );
          };


            const CentralStackNavigator = () => {
            return (
            <CentralStack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <CentralStack.Screen name="CentralDashBoard" component={CentralDashBoard} />
            <CentralStack.Screen name="CentralViewBeneficiary" component={CentralViewBeneficiary} />
            <CentralStack.Screen name="CentralUserPage" component={CentralUserPage} />
            <CentralStack.Screen name="CentralProgramDetailsPage" component={CentralProgramDetailsPage} />
            </CentralStack.Navigator>
            );
          };

            // console.log(state.user, "USERRRR")


            function renderScreens() {

            if (state.loading) {
            return <RootStack.Screen name={"Splash"} component={SplashScreenDummy} />;

          }


            return (state?.user?.type === "beneficiary" ?
            <RootStack.Screen name={"UserStackNavigator"}>
          {() => (
            <UserContext.Provider value={state.user}>
            <UserStackNavigator />
            </UserContext.Provider>
            )}
            </RootStack.Screen> : state?.user?.type === "organization" ?
            <RootStack.Screen name={"DistributorStackNavigator"}>
          {() => (
            <UserContext.Provider value={state.user}>
            <DistributorStackNavigator />
            </UserContext.Provider>
            )}
            </RootStack.Screen> : state?.user?.type === "manager" ?
            <RootStack.Screen name={"CentralStackNavigator"}>
          {() => (
            <UserContext.Provider value={state.user}>
            <CentralStackNavigator />
            </UserContext.Provider>
            )}
            </RootStack.Screen> :


            <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />

            );


          }


            return (


            <AuthContext.Provider value={auth}>
            <NavigationContainer>
            <RootStack.Navigator
            screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>

          {renderScreens()}


            </RootStack.Navigator>
            </NavigationContainer>

            </AuthContext.Provider>


            )
            ;
          };


        export default App;

        const styles = StyleSheet.create({

        MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      },
        button: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "grey",
        // shadowOpacity: 0.1,
        shadowOffset: {x: 2, y: 0},
        shadowRadius: 2,
        borderRadius: 30,
        position: "absolute",
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

      },
        actionBtn: {

        backgroundColor: "#1E90FF",
        textShadowOffset: {width: 5, height: 5},
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",


      },


      });

