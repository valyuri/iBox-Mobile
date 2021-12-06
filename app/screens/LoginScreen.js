import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {/* Checks if any textboxes are empty */}
  const checkInput = () => {
    if(email === ""){
      Alert.alert("Login Error", "Please enter an email.");
      return;
    }

    if(password === ""){
      Alert.alert("Login Error", "Please enter a password.");
      return;
    }

    return (
      navigation.navigate('Homepage')),
      Alert.alert("Login", "Successfully logged in!");
  };

  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/iboxlogo.png")}
        style={{ width: 200, height: 150 }}
      />

      <Text style={styles.headertext}>
        Welcome!
      </Text>

      <View style={styles.seperator}/>
      <View style={{ padding: 5}}/>

      <TextInput 
        style={styles.textboxstyle} 
        placeholder="Email" 
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}/>

      <TextInput
        style={styles.textboxstyle}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />

      <View style={{ padding: 5}}/>

      {/*Send User to Homescreen*/}
      <TouchableOpacity style={styles.button} onPress={checkInput}>
        <Text style={{color: "white", textAlign: "center"}}>Log In</Text>
      </TouchableOpacity>

      <View style={{ padding: 9 }}/>
      <View style={styles.seperator}/>
      <View style={{ padding: 6 }}/>

      <Text style={{ paddingBottom: 5, fontSize: 15 }}>Not a user?</Text>

      {/* This send the user to create account screen */}
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text style={styles.interactibletext}>Create an Account!</Text>
      </TouchableOpacity>
    </View>
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
      marginVertical: 6,
    },
  
    headertext: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 10,
    },

    seperator: {
      backgroundColor: '#D3D3D3',
      height: 1,
      width: "90%",
    },

    interactibletext: {
      color: "#007bff",
      textDecorationLine: "underline",
    },

    button: {
      height: 40,
      width: 75,
      backgroundColor: "#007bff",
      padding: 8,
      borderRadius: 4,
  },
  });

export default Login;


  
