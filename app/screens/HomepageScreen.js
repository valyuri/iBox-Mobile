import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"

import Profile from "./ProfileScreen";
import Uploads from "./UploadScreen";
import Groupchat from "./GroupchatScreen";

const HomeTabs = createBottomTabNavigator();

function Homepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}> Group Search </Text>

      <View style={styles.horizontalAlign}>
      
        <Ionicons 
          name="search" 
          size={35} 
          color="#007bff"
         />

        <View style={{ padding: 5 }}/>

        <TextInput
          style={styles.textboxstyle}
          placeholder="Search for groups here"/>

      </View>

      <View style={{ padding: 5 }}/>
      <View style={styles.seperator}/>
      <View style={{ padding: 10 }}/>

      <Text style={styles.headertext}> Your Groups</Text>
      <Text> Looks like you're not in any groups... </Text>

      <View style={{padding: 10}}/>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: "white"}}> Create a Group </Text>
      </TouchableOpacity>

    </View>
  );
}

//Sets up tabs for homescreen 
function Homestack() {
  return (
    <HomeTabs.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          {/* Checks if a certain tab is tapped on and changes their icon */}
          if(route.name === 'Home') {
            icon = focused
              ? 'home'
              : 'home-outline';
          } 
          
          else if(route.name === 'Group Chat') {
            icon = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          }

          else if(route.name === 'Uploads') {
            icon = focused
              ? 'cloud-upload-sharp'
              : 'cloud-upload-outline';
          }

          else if(route.name === 'Profile') {
            icon = focused
              ? 'person'
              : 'person-outline';
          } 
          
          return <Ionicons name={icon} size={30} color={"white"} />;
        },

        tabBarStyle: { backgroundColor: "#007bff"},
        tabBarLabelStyle: { 
          fontSize: 12,
          color: "#fff"},

      })}
    >

      <HomeTabs.Screen name="Home" component={Homepage} options={{headerShown: false}} />
      <HomeTabs.Screen name="Group Chat" component={Groupchat} options={{headerShown: false}}/>
      <HomeTabs.Screen name="Uploads" component={Uploads} options={{headerShown: false}} />
      <HomeTabs.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </HomeTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textboxstyle: {
    height: 40,
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7,
  },

  headertext: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 10,
  },

  seperator: {
    backgroundColor: '#D3D3D3',
    height: 1,
    width: '90%',
  },

  horizontalAlign: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    height: 40,
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 4,
},
});

export default Homestack;
