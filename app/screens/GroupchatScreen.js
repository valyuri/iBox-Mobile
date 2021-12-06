import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native";

function Groupchat() {
  return (
    <View style={styles.container}>

      <View style={styles.rowalign}>

        <TextInput style={styles.txtboxstyle} placeholder="Send message..." />
        <View style={{ padding: 5 }}/>
        <TouchableOpacity style={styles.button}>
            <Text style={{color: "white"}}> Send </Text>
        </TouchableOpacity>

      </View>
      
      <View style={{padding: 10}}/>

      <TouchableOpacity style={styles.message}>
        <Text style={{color: "white"}}> Test Message </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
    marginBottom: 20,
  },

  txtboxstyle: {
    height: 40,
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7,
  },

  button: {
      height: 40,
      backgroundColor: "#007bff",
      padding: 8,
      borderRadius: 4,
  },

  rowalign: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  message: {
    height: 50,
    backgroundColor: "#007bff",
    alignSelf: "flex-end",
    padding: 12,
    borderRadius: 30,
  }
});

export default Groupchat;
