import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";


// In React Native, the NavigationContainer is a component provided by the React Navigation library
// that helps manage navigation between screens in your application. 
// It creates a navigation context and provides a way to navigate between screens using a stack-based navigation system.
// A stack-based navigation system is a type of navigation system used in mobile apps that maintains a stack of screens or views. 
// In this system, when a user navigates to a new screen, it is added to the top of the stack. 
// When the user navigates back, the top screen is removed from the stack and the user is returned to the previous screen.

Stack-based navigation systems are commonly used in mobile app development frameworks such as React Native and Flutter. They provide a simple and intuitive way for users to navigate through an app's content and allow for a clear and predictable back button behavior.

In a stack-based navigation system, the stack is usually implemented as a Last-In-First-Out (LIFO) data structure. This means that the most recently added screen is the first one to be removed when the user navigates back.

Stack-based navigation systems often provide additional features such as navigation animations and transitions, as well as support for nested navigation and modal screens. Overall, stack-based navigation systems are a powerful and versatile tool for building mobile apps with multiple screens and views.
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
