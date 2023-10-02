import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotFound from './NotFound'
import { style } from '../styles/commonStyles'

const More = () => {
  return (
    <View style={[style.flexAlignJustify]}>
    <NotFound/>
  </View>
  )
}

export default More

const styles = StyleSheet.create({})