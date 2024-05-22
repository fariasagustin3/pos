import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { products } from '../data'
import { useStore } from '../store'

const ProductList = () => {
  const [posProducts, setPosProducts] = useState([])
  const category = useStore(state => state.category);

  useEffect(() => {
    const posProductsFiltered = products.filter(product => product.category === category);
    setPosProducts(posProductsFiltered)
  }, [category])

  return (
    <View style={styles.container}>
      {posProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 30,
    marginBottom: 130,
  }
})