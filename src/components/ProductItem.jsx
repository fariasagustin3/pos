import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store'

const ProductItem = ({ product }) => {
  const addToCart = useStore(state => state.addToCart)

  return (
    <Pressable onPress={() => addToCart(product)}>
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </Pressable>
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
    borderRadius: 15,
    objectFit: "cover"
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