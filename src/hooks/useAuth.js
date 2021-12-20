import React, { useEffect, useMemo, useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { createAction } from "../utils/createAction";
import SecureStorage from "react-native-secure-storage";
import { sleep } from "../utils/sleep";

export function useAuth() {


  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            loading: false,
            user: { ...action.payload },
          };
        case "REMOVE_USER":
          return {
            ...state,
            user: undefined,
          };
        case "SET_LOADING":
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );


  const auth = useMemo(() => ({

      login: async (phoneNumber, password) => {

        const { data } = await axios.post(`${BASE_URL}/auth/local`, {
          identifier: phoneNumber,
          password,
        });

        const user = {
          username: data.user.username,
          token: data.jwt,
          type: data.user.type,
          firstname: data.user.firstname,
          lastname: data.user.lastname,
          id: data.user.id,
          email: data.user.email,
          dob: data.user.dob
        };
        console.log(data, "DARARARRA")

        await SecureStorage.setItem("user", JSON.stringify(user));

        dispatch(createAction("SET_USER", user));

        // console.log(data.user.type, "USERR");
      },


      register: async (phoneNumber, password, firstName, lastName, type) => {
        await axios.post(`${BASE_URL}/auth/local/register`, {
          username: phoneNumber,
          email: `${firstName}${lastName}@projectjoin.com`,
          firstname: firstName,
          lastname: lastName,
          type: type,
          provider: "local",
          confirmed: true,
          blocked: false,
          role: 1,
          password,

        });
      },
      logout: async () => {

        await SecureStorage.removeItem("user");
        dispatch(createAction("REMOVE_USER"));
        // console.log("logout");
      },

    }), [],
  );

  useEffect(() => {
    sleep(700).then(() => {
      SecureStorage.getItem("user").then(user => {
        // console.log(user, "STORED USERRR");

        if (user) {
          dispatch(createAction("SET_USER", JSON.parse(user)));
        } else {
          dispatch(createAction("SET_LOADING", false));
        }

      });
    });


  }, []);


  return { auth, state };


}
