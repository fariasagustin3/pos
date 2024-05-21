import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const heightScreen = Dimensions.get("window").height;

const Rightbar = () => {
  return (
    <View style={styles.container}>
      <Text>Rightbar</Text>
    </View>
  )
}

export default Rightbar

const styles = StyleSheet.create({
  container: {
    height: heightScreen,
    flex: 2,
    borderLeftWidth: 2,
    borderLeftColor: "#FF5C00"
  }
})