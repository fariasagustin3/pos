import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Rightbar from './Rightbar';
import Leftbar from './Leftbar';

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;

const Layout = ({ children, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.barsContainer}>
        <Leftbar navigation={navigation} />
        <View style={styles.childrenContainer}>
          {children}
        </View>
        <Rightbar />
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