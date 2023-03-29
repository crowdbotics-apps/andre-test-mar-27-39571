import { Text } from "react-native";
import { openapi_get_models_read } from "./../../store/openAPI/openapi_response_get_ListModels.slice.js";
import { swapi_get_people_id_read } from "./../../store/sWAPI/swapi_response_get_Peopledetails.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(swapi_get_people_id_read({
      format: "json"
    }));
    dispatch(openapi_get_models_read({}));
  }, []);
  const {
    entities: openapiModels
  } = useSelector(state => state?.openapi_response_get_ListModels);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.wPDymlas}></Text></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  wPDymlas: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;