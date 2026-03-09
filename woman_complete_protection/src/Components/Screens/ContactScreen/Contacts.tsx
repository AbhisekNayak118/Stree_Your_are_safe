import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";

const contacts = [
  { id: "1", name: "Mom", phone: "9999999999" },
  { id: "2", name: "Friend", phone: "8888888888" }
];

const ContactsScreen = () => {

  const renderItem = ({ item }) => (
    <View style={styles.contactCard}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>

      <TouchableOpacity style={styles.callButton}>
        <Text style={{color:"white"}}>Call</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>+ Add Contact</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ContactsScreen;

