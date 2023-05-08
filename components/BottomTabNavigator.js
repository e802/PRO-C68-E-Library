import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";


// In React Native, the NavigationContainer is a component provided by the React Navigation library
// that helps manage navigation between screens in your application. 
// It creates a navigation context and provides a way to navigate between screens using a stack-based navigation system.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
