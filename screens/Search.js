import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});

// In React Native, flex: 1 is a common style property used to control how a component expands or shrinks to fill the available space within 
// its parent container.
// When applied to a component, the flex: 1 style property tells the component to expand and fill as much available space as possible 
// within its parent container. 
// This means that the component will stretch to fill the remaining space that is not occupied by other components or content.
