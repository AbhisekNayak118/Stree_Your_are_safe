import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../Screens/HomeScreen/Home";
import ContactsScreen from "../Screens/ContactScreen/Contacts";
// import ProfileScreen from "../Screens/ProfileScreen/";
import SettingsScreen from "../Screens/SettingsScreen/Settings";
import AboutScreen from "../Screens/AboutScreen/About";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contacts" component={ContactsScreen} />
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;