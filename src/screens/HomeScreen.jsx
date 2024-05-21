import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const HomeScreen = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ProductList />
        </View>
      </ScrollView>
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 7
  },
})