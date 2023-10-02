import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utilis/colors'
import Entypo from 'react-native-vector-icons/Entypo';

const NotFound = () => {
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
        <Entypo
        name={'emoji-sad'}
        size={35}
        color={'red'}
        />
        <Text style={{color:colors.orange,fontSize:20,fontWeight:'600'}}>Sorry, Page not available!</Text>
    </View>
  )
}

export default NotFound

const styles = StyleSheet.create({})