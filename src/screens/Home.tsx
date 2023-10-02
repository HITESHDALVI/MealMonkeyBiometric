import { StyleSheet, View } from 'react-native'
import React from 'react'
import NotFound from './NotFound'
import { style } from '../styles/commonStyles'

const Home = () => {
  return (
    <View style={[style.flexAlignJustify]}>
    <NotFound/>
  </View>
  )
}

export default Home

const styles = StyleSheet.create({})