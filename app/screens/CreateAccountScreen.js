import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from "react-native";

function CreateAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkInput = () => {
    if (name === "") {
      Alert.alert("Error", "Please enter a name.");
      return;
    }
    if (email === "") {
      Alert.alert("Error", "Please enter an email.");
      return;
    }
    if (password === "") {
      Alert.alert("Error", "Please enter a password.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    return (
      navigation.navigate("Homepage"),
      Alert.alert("Account Creation", "You have successfully created an account!"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>
        Sign Up
      </Text>

      <View style={styles.seperator}/>
      <View style={{ padding: 5 }}/>

      <TextInput
      style={styles.textboxstyle}
      placeholder="Name"
      onChangeText={text => setName(text)}/>

      <TextInput
      style={styles.textboxstyle}
      placeholder="Email"
      autoCapitalize="none"
      onChangeText={text => setEmail(text)}/>

      <TextInput
      style={styles.textboxstyle}
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}/>

      <TextInput
      style={styles.textboxstyle}
      placeholder="Confirm Password"
      secureTextEntry={true}
      onChangeText={text => setConfirmPassword(text)}/>

      <View style={{ padding: 5 }}/>

      <TouchableOpacity style={styles.button} onPress={checkInput}>
        <Text style={{color: "white", textAlign: "center"}}>Create Account</Text>
      </TouchableOpacity>

      <View style={{padding: 9}}/>
      <View style={styles.seperator}/>
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
    fontSize: 25,
    paddingBottom: 10,
  },

  seperator: {
    backgroundColor: '#D3D3D3',
    height: 1,
    width: "90%",
  },

  button: {
    height: 40,
    width: 150,
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 4,
  },
});

export default CreateAccount;
