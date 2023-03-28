import { swapi_get_people_read } from "./../../store/sWAPI/swapi_response_get_Peopledetails.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(swapi_get_people_read({
      id: 1,
      format: "json"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  xBverhfG: {
    position: "absolute",
    width: 340,
    height: 560,
    left: 10,
    top: 10
  },
  fhUAkdhP: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  NWJFZcee: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled1;