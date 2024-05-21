import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TableIcon from '../assets/table-icon.png'

const TableItem = ({ table, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("HomeScreen")} style={styles.imageContainer}>
        <Image source={table.image} style={styles.productImage} />
        <Text style={styles.title}>{table.title}</Text>
      </Pressable>
    </View>
  )
}

export default TableItem

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#FF5C00",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 150,
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 18
  },
})