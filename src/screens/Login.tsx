import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utilis/colors' 

type Props={
    handleLogin:()=>void
}
const Login = (props:Props) => {
  return (
    <ScrollView contentContainerStyle={styles.loginWrapper}>
        <Image source={require('../assets/images/welcome_top_shape.png')} style={[styles.bgStyle]}/> 
        <Image source={require('../assets/images/app_logo.png')} style={[styles.logo]}/> 
        <Text style={[styles.subText]}>Discover the best foods from over 1,000 restaurants and fast delivery to your {' '} doorstep</Text>
        <Pressable style={[styles.loginBtn]} onPress={()=>props.handleLogin()}>
            <Text style={[styles.loginText]}>Login</Text>
        </Pressable>
        <Pressable style={[styles.signUpBtn]}>
            <Text style={[styles.signUpText]}>Create an Account</Text>
        </Pressable>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    loginWrapper:{
        backgroundColor:colors.white,flex:1,alignItems:'center',
    },
    bgStyle:{height:Dimensions.get('screen').height/1.75,width:Dimensions.get('screen').width,resizeMode:'cover',marginTop:-8},
    logo:{height:175,width:205,marginTop:-165},
    subText:{fontWeight:'500',marginTop:40,marginBottom:10,marginHorizontal:50,textAlign:'center',color:colors.black,opacity:0.5},
    loginBtn:{backgroundColor:colors.orange,width:300,padding:15,borderRadius:50,marginTop:25},
    loginText:{fontWeight:'600',textAlign:'center',color:colors.white,fontSize:16},
    signUpBtn:{backgroundColor:colors.white,width:300,padding:15,borderRadius:50,marginTop:20,borderColor:colors.orange,borderWidth:1.5},
    signUpText:{fontWeight:'600',textAlign:'center',color:colors.orange,fontSize:16},
})