import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import LoginScreen from '@/screen/LoginScreen'

export default function index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <LoginScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
})