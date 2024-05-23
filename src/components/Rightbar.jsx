import { Dimensions, StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from '../store/index';
import MinusButton from '../assets/minus-button.png'
import PlusButton from '../assets/plus-button.png'
import Trash from '../assets/delete-item.png'

const Rightbar = () => {
  const cart = useStore(state => state.cart);
  const tables = useStore(state => state.tables);
  const removeFromCart = useStore(state => state.removeFromCart);
  const incrementQuantity = useStore(state => state.incrementQuantity);
  const selectedTable = useStore(state => state.selectedTable);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedTable.title} Order</Text>
      <ScrollView style={styles.scrollView}>
        {/* <View style={{ height: 300, width: "100%", backgroundColor: "red" }}> */}


        {cart?.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <View style={styles.productContentContainer}>
              <View style={styles.productDataContainer}>
                <Image style={styles.productImage} source={{ uri: product.image }} />
                <View style={styles.productTexts}>
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.productPrice}>${product.price}</Text>
                  <View style={styles.quantityContainer}>
                    <Pressable disabled={product.quantity < 2} onPress={() => incrementQuantity(product.id, product.quantity - 1, (product.initialPrice * (product.quantity - 1)).toFixed(2))}>
                      <Image style={styles.button} source={MinusButton} />
                    </Pressable>
                    <Text style={styles.quantity}>{product.quantity}</Text>
                    <Pressable onPress={() => incrementQuantity(product.id, product.quantity + 1, (product.initialPrice * (product.quantity + 1)).toFixed(2))}>
                      <Image style={styles.button} source={PlusButton} />
                    </Pressable>
                  </View>
                </View>
              </View>
              <Pressable style={styles.trashButtonContainer} onPress={() => removeFromCart(product.id)}>
                <Image source={Trash} style={styles.trashButton} />
              </Pressable>
            </View>
          </View>
        ))}
        {/* </View> */}
      </ScrollView>
      <View style={styles.checkoutContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>TOTAL</Text>
          <Text style={styles.total}>$2000</Text>
        </View>
        <Pressable style={styles.addOrder}>
          <Text style={styles.addOrderButton}>ADD ORDER</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Rightbar

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 2,
    borderLeftWidth: 2,
    borderLeftColor: "#FF5C00",
    position: "relative"
  },
  title: {
    fontSize: 30,
    color: "black",
    paddingLeft: 10,
    fontWeight: "800",
    textAlign: "center",
  },
  scrollView: {
    flex: 4,
  },
  cartContainer: {

  },
  productContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: "row"
  },
  productContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  productDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  productTexts: {
    flexDirection: "column",
    gap: 5
  },
  productTitle: {
    fontWeight: "500",
    fontSize: 19,
    color: "black",
  },
  productPrice: {
    color: "#FF5C00",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "flex-start"
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  quantity: {
    fontWeight: "500",
    fontSize: 20,
    color: "black"
  },
  trashButton: {
    width: 30,
    height: 30,
  },
  trashButtonContainer: {
    alignSelf: "center"
  },
  button: {
    width: 30,
    height: 30,
  },

  checkoutContainer: {
    flex: 0.2,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderTopColor: "#FF5C00",
    flexDirection: "column",
    gap: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center",
    gap: 100
  },
  totalText: {
    fontWeight: "800",
    color: "#FF5C00",
    fontSize: 20,
  },
  total: {
    fontWeight: "800",
    color: "#FF5C00",
    fontSize: 20,
  },
  addOrder: {
    backgroundColor: "#FF5C00",
    paddingVertical: 10,
    borderRadius: 100,
  },
  addOrderButton: {
    textAlign: "center",
    fontWeight: "500",
    color: "white"
  }
})