import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import { Alert } from 'react-native';

const TableItem = ({ table, navigation }) => {
  const tables = useStore(state => state.tables);
  const addTable = useStore(state => state.addTable);
  const removeTable = useStore(state => state.removeTable);
  const selectTable = useStore(state => state.selectTable);

  const addTableToStore = (table) => {
    if (tables.includes(table)) {
      Alert.alert(
        "Are you sure you want to clear this table?",
        "This table will be unmarked",
        [
          {
            text: "Yes", onPress: () => {
              removeTable(table.id)
            }
          },
          { text: "No", style: "cancel" },
        ]
      )
    } else {
      addTable(table);
      selectTable(table)
      navigation.navigate("HomeScreen")
    }
  }

  useEffect(() => {
    // tables.map(occupiedTable => occupiedTable.id === table.id)
  }, [tables])

  return (
    <View style={tables.includes(table) ? styles.containerSelected : styles.container}>
      <Pressable onPress={() => addTableToStore(table)} style={styles.imageContainer}>
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
    gap: 10,
  },
  containerSelected: {
    width: 200,
    height: 230,
    borderRadius: 15,
    backgroundColor: "#FF5C00",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    opacity: 0.5,
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