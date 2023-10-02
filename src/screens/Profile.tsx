import { StyleSheet, View } from 'react-native'
import React from 'react'
import NotFound from './NotFound'
import { style } from '../styles/commonStyles'

const Profile = () => {
  return (
    <View style={[style.flexAlignJustify]}>
    <NotFound/>
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({})