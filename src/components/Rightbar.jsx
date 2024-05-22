import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useStore } from '../store/index';

const heightScreen = Dimensions.get("window").height;

const Rightbar = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const category = useStore(state => state.category)

  return (
    <View style={styles.container}>
      <Pressable onPress={decrement}>
        <Text>Decrement</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={increment}>
        <Text>Increment</Text>
      </Pressable>
      <Text>{category}</Text>
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