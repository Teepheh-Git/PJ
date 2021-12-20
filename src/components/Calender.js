import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const Calender = ({ props, title, date, placeholder }) => {


  // const [date, setDate] = useState("");
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ color: "black", bottom: 10, fontSize: 18 }}>{title}</Text>

      <DatePicker
        style={{
          width: w - 40, backgroundColor: "#F3EFFF80", marginVertical: 5,
        }}
        date={date}
        mode="date"
        format="YYYY-MM-DD"
        minDate="2021-12-01"
        androidMode={"calendar"}
        placeholder={placeholder}
        iconSource={require("../../assets/calender.png")}
        maxDate="2030-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: 10,
            top: 14,
            marginLeft: 0,
            width: 16,
            height: 16,

          },
          dateInput: {
            borderColor: "#C4C4C4",
            height: 55,
            borderRadius: 5,
            borderWidth: 0.5,
            // marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        // onDateChange={(date) => {
        //   setDate(date);
        //   console.log(date);
        // }}
        {...props}
      />


    </View>
  );
};


export default Calender;
