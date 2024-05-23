import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TableItem from './TableItem'
import { tables } from '../data'

const TableList = ({ navigation }) => {


  return (
    <View style={styles.container}>
      {tables?.map((table) => (
        <TableItem
          key={table.id}
          table={table}
          navigation={navigation}
        />
      ))}
    </View>
  )
}

export default TableList

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 30,
    marginBottom: 70,
  }
})