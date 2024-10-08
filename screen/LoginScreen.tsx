import { View, Text,ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Login from '@/components/Login'

export default function LoginScreen() {
  return (
    <View  style={{justifyContent:"center", alignItems:"center",flex:1,}}>
      <ImageBackground
      source={require("../assets/images/couple-winter-cloths-studio.jpg")}
      style={styles.background}
      >
      <Login/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust to fit the whole screen
    height: '100%',
  },
})