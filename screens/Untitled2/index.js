import { useSelector } from "react-redux";
import { Text } from "react-native";
import { openapi_get_models_read } from "../../store/openAPI/openapi_response_get_ListModels.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const {
    entities: openapi_response_get_ListModels
  } = useSelector(state => state.openapi_response_get_ListModels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openapi_get_models_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.jZXlZIlU}>model ID: {openapi_response_get_ListModels[0]?.data[0]}</Text></View>
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
  jZXlZIlU: {
    width: 335,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;