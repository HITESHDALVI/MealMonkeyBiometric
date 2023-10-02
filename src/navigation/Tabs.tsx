import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Offers from '../screens/Offers';
import Profile from '../screens/Profile';
import More from '../screens/More';
import { colors } from '../utilis/colors';
 
const Tab=createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator  
    >
      <Tab.Screen name="home" component={Home}    options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              color: colors.orange,
              fontWeight:'600',
              fontSize: 14,
            },
            headerShown: false,
            tabBarIcon: ({focused}) =>
             focused ? (
              <Image source={require('../assets/images/tab_menu.png')} style={[{height:15,width:15,marginTop:10,tintColor:colors.orange}]}/> 
             ) : (
                <Image source={require('../assets/images/tab_menu.png')} style={[{height:15,width:15,marginTop:10}]}/> 
             ),
          }}/>
      <Tab.Screen name="menu" component={Menu}/>
      <Tab.Screen name="offers" component={Offers}/>
      <Tab.Screen name="profile" component={Profile}/>
      <Tab.Screen name="more" component={More}/>
    </Tab.Navigator>
  )
}

export default Tabs