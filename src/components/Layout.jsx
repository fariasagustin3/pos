import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Rightbar from './Rightbar';
import Leftbar from './Leftbar';
import { useRoute } from '@react-navigation/native';

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;

const Layout = ({ children, navigation }) => {
  const route = useRoute()

  return (
    <View style={styles.container}>
      <View style={styles.barsContainer}>
        <Leftbar navigation={navigation} />
        <View style={styles.childrenContainer}>
          {children}
        </View>
        {route.name === "HomeScreen" && (
          <Rightbar />
        )}
      </View>
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  barsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childrenContainer: {
    flex: 5
  }
})