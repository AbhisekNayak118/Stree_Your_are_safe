import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

const HomeScreen = () => {

  const handleSOS = () => {
    console.log("SOS Triggered");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Stay Safe</Text>

      <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      <Text style={styles.info}>
        Press the SOS button in case of emergency
      </Text>

    </View>
  );
};
export default HomeScreen;