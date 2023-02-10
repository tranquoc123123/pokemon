import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Image, } from 'react-native';
import Content from './Components/content/Content';
import Home from './Components/Screens/Home/Home';
import Detail from './Components/Screens/Detail/Detail';
import Package from './Components/Screens/Package/Package';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from './Components/color';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {
  useEffect(() => {
    // navigation.setOptions({
    //   headerShown: false,
    // });
  }, [])
  return (
    <Stack.Navigator initialRouteName='Home'   screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>

  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ showLabel: false }}
        initialRouteName='Home'
        screenOptions={{
          showLabel: false,
          tabBarStyle: {
            height: 65,
            paddingTop: 10,
            borderTopWidth: 0,
            backgroundColor: '#ffffff',
            position: 'absolute',
            elevation: 0,
          },
          tabBarActiveTintColor: "#F26526",
          tabBarInactiveTintColor: "black",
          headerShown: false
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ tabBarIcon: ({ color }) => (<Icon name="home" size={30} color={"#F26526"} />), }} />
        <Tab.Screen name="Package" component={Package} options={{ tabBarIcon: ({ color }) => (<Icon name="paw" size={30} color={"#F26526"} />), }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;
