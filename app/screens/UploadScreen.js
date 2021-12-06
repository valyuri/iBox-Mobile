import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

//Upload function can only upload images for now

function Uploads() {
  {/*This sets up the image picker to select images*/}
  let [selectedImage, setImage] = React.useState(null);

  let openImagePickerAsync = async() => {
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    {/* Checks if permission was granted to open gallery */}
    if (permissions.granted === false) {
      Alert.alert("Permissions denied");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    if(result.cancelled === true) {
      return;
    }

    setImage({localUri: result.uri});
  };

  if (selectedImage !== null){
    return(
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.image}/>

        <View style={{ padding: 5}}/>

        <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
          <Text style={{color: "white"}}>Upload File</Text>
        </TouchableOpacity>

      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text> Looks like you haven't uploaded anything yet... </Text>

      <View style={{ padding: 15}}/>

      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text style={{color: "white"}}>Upload File</Text>
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

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  
  button: {
    height: 40,
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 4,
  },
});

export default Uploads;
