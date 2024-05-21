import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductImage from '../assets/image.png'

const ProductItem = () => {
  return (
    <View style={styles.container}>
      <Image source={ProductImage} style={styles.productImage} />
      <Text style={styles.title}>Titulo de prueba</Text>
      <Text style={styles.price}>$1200</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#F8F9FD",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 18
  },
  price: {
    color: "#FF5C00",
    fontWeight: "800",
    fontSize: 18
  }
})