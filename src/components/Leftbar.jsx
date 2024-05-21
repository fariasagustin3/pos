import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { leftbarButtons, leftbarIndexButtons } from '../data'
import { useRoute } from '@react-navigation/native';

const heightScreen = Dimensions.get("window").height;

const Leftbar = ({ navigation }) => {
  const [selected, setSelected] = useState("TablesScreen");
  const [iconSelected, setIconSelected] = useState("Coffee")

  const route = useRoute()

  const changeSelected = (screen, name) => {
    console.log(screen)
    setSelected(name)
    navigation.navigate(screen);
  }

  const changeButtonSelected = (buttonTitle) => {
    setIconSelected(buttonTitle)
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
        <>
          {leftbarButtons.map((button) => (
            <Pressable onPress={() => changeButtonSelected(button.title)} key={button.id} style={styles.buttonContainer}>
              <Image source={iconSelected === button.title ? button.imageSelected : button.image} style={styles.buttonImage} />
              <Text style={iconSelected === button.title ? styles.textSelected : styles.text}>{button.title}</Text>
            </Pressable>
          ))}
        </>
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