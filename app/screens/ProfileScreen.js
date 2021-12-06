import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"

function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          source={require("../assets/defaultprofilepicture.jpg")}
          style={styles.profileicon}/>

        <View style={{ padding: 5}}/>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="md-image-outline" size={20} color="white"/>
          <Text style={{color: "white"}}> Change Photo </Text>
        </TouchableOpacity>


        <View style={{ padding: 10 }}/>
        <View style={styles.seperator}/>
        <View style={{ padding: 5 }}/>

        <Text style={styles.headertext}> Update Profile </Text>
      
        <TextInput 
          style={styles.textboxstyle}
          placeholder="Enter new name"
          />

        <TextInput 
          style={styles.textboxstyle}
          placeholder="Enter new email"
          />

        <View style={{ padding: 5 }}/>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: "white"}}> Update Profile </Text>
        </TouchableOpacity>

        <View style={{ padding: 5 }}/>
        <View style={styles.seperator}/>
        <View style={{ padding: 5 }}/>

        <Text style={styles.headertext}> Change Password </Text>

        <TextInput
          style={styles.textboxstyle}
          placeholder="Old Password"
          secureTextEntry={true}/>

        <TextInput 
          style={styles.textboxstyle}
          placeholder="New password"
          secureTextEntry={true}/>

        <TextInput 
          style={styles.textboxstyle}
          placeholder="Confirm new password"
          secureTextEntry={true}/>

       <View style={{ padding: 5 }}/>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: "white"}}> Change Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  textboxstyle: {
    height: 40,
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7,
    marginVertical: 6,
  },

  profileicon: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#007bff"
  },

  seperator: {
    backgroundColor: '#D3D3D3',
    height: 1,
    width: "90%",
  },

  button: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 4,
  },

  headertext: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default Profile;
