import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { leftbarButtons, leftbarIndexButtons } from '../data'
import { useRoute } from '@react-navigation/native';
import { useStore } from '../store';
import Table from '../assets/table-icon.png'

const heightScreen = Dimensions.get("window").height;

const Leftbar = ({ navigation }) => {
  const [selected, setSelected] = useState("TablesScreen");
  const [iconSelected, setIconSelected] = useState("Coffee")
  const changeCategory = useStore((state) => state.changeCategory)
  const unselectTable = useStore((state) => state.unselectTable)

  const route = useRoute()

  const changeSelected = (screen, name) => {
    setSelected(name)
    navigation.navigate(screen);
  }

  const changeButtonSelected = (buttonTitle) => {
    setIconSelected(buttonTitle);
    changeCategory(buttonTitle)
  }

  const goToTableScreen = () => {
    navigation.navigate("TableScreen");
    unselectTable()
  }

  useEffect(() => {
    setSelected(route.name)
  }, [route])

  return (
    <View style={styles.container}>
      {route.name === "TableScreen" ? (
        <>
          {leftbarIndexButtons.map((button) => (
            <Pressable onPress={() => changeSelected(button.screen, button.title)} key={button.id} style={styles.buttonContainer}>
              <Image source={selected === button.screen ? button.imageSelected : button.image} style={styles.buttonImage} />
              <Text style={selected === button.screen ? styles.textSelected : styles.text}>{button.title}</Text>
            </Pressable>
          ))}
        </>
      ) : (
        <View style={styles.buttonsContainer}>
          <View style={styles.categoriesButtons}>
            {leftbarButtons.map((button) => (
              <Pressable onPress={() => changeButtonSelected(button.title)} key={button.id} style={styles.buttonContainer}>
                <Image source={iconSelected === button.title ? button.imageSelected : button.image} style={styles.buttonImage} />
                <Text style={iconSelected === button.title ? styles.textSelected : styles.text}>{button.title}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable onPress={goToTableScreen} style={styles.buttonContainer}>
            <Image source={Table} style={styles.buttonImage} />
            <Text style={styles.text}>Tables</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default Leftbar

const styles = StyleSheet.create({
  container: {
    height: heightScreen,
    borderRightColor: "#FF5C00",
    borderRightWidth: 2,
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    gap: 20,
  },
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  categoriesButtons: {
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 30,
    paddingBottom: 100,
  },
  buttonImage: {
    width: 50,
    height: 50
  },
  textSelected: {
    color: "#FF5C00",
    fontWeight: "500"
  },
  text: {
    fontWeight: "500",
    color: "#828487"
  }
})