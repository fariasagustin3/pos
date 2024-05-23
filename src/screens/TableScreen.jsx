import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import TableList from '../components/TableList'
import { useStore } from '../store'

const TableScreen = ({ navigation }) => {
  const tables = useStore(state => state.tables);
  const selectedTable = useStore(state => state.selectedTable);

  console.log(tables)
  console.log(selectedTable)

  return (
    <Layout navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TableList navigation={navigation} />
        </View>
      </ScrollView>
    </Layout>
  )
}

export default TableScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 7
  },
})