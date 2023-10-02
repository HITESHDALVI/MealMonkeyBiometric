import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
    CurvedBottomBar,
    ICurvedBottomBarRef,
  } from 'react-native-curved-bottom-bar';
import {useState,useRef,useMemo} from 'react'
import Menu from "../screens/Menu";
import Offers from "../screens/Offers";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import More from "../screens/More"; 
import { colors } from "../utilis/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

StatusBar.setBarStyle('dark-content');
 
const ThemeScreen = () => {
    const ref = useRef<ICurvedBottomBarRef>(null);
    const [type, setType] = useState<'DOWN' | 'UP'>('DOWN');
    const [position, setposition] = useState<'LEFT' | 'CENTER' | 'RIGHT'>(
      'CENTER'
    );
    const _renderIcon = (routeName: string, selectedTab: string) => {
      const iconMapping = {
        menu: { IconComponent: Ionicons, iconName: 'grid',name:'Menu' },
        offers: { IconComponent: MaterialIcons, iconName: 'shopping-bag',name:'Offers' },
        profile: { IconComponent: FontAwesome5, iconName: 'user-alt',name:'Profile' },
        more: { IconComponent: Foundation, iconName: 'indent-more',name:'More' },
      };
      const { IconComponent, iconName, name } = iconMapping[routeName];
      return (
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <IconComponent
            name={iconName}
            size={20}
            color={routeName === selectedTab ? colors.orange : colors.grey}
            />
            <Text style={{  color:routeName === selectedTab ? colors.orange : colors.grey,fontSize:12,fontWeight:'500'}}>{name}</Text>
        </View>
      );
    };
    const main = useMemo(() => {
      return (
        <View style={styles.container}>
          <CurvedBottomBar.Navigator
          screenOptions={{
            headerShown:false
          }}
            shadowStyle={styles.shawdow}
            ref={ref}
            type={type}
            circlePosition={position}
            height={60}
            circleWidth={60}
            bgColor={colors.white}
            borderTopLeftRight
            initialRouteName="menu"
            renderCircle={({ routeName, selectedTab, navigate }) => (
              <TouchableOpacity
                style={[type === 'DOWN' ? styles.btnCircle : styles.btnCircleUp]}
                onPress={() => {
                  navigate(routeName);
                }}
              > 
                <Ionicons
                  name="home"
                  size={23}
                  style={{opacity:1}}
                  color={selectedTab === routeName ? colors.orange : colors.white}
                />
              </TouchableOpacity>
            )}
            tabBar={({ routeName, selectedTab, navigate }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigate(routeName)}
                  style={styles.tabbarIcon}
                >
                  {_renderIcon(routeName, selectedTab)}
                </TouchableOpacity>
              );
            }}
          >
            <CurvedBottomBar.Screen
              name="menu"
              position="LEFT"
              component={() => (
              <Menu/>
              )}
            />
            <CurvedBottomBar.Screen
              name="offers"
              component={() => (
                <Offers/>
              )}
              position="LEFT"
            />
            <CurvedBottomBar.Screen
              name="home"
              component={() => (
                <Home/>
              )}
              position="CIRCLE"
            />
            <CurvedBottomBar.Screen
              name="profile"
              position="RIGHT"
              component={() => (
                <Profile/>
              )}
            />
            <CurvedBottomBar.Screen
              name="more"
              component={() => (
                <More/>
              )}
              position="RIGHT"
            />
          </CurvedBottomBar.Navigator>
        </View>
      );
    }, [position, type]);
  
    return main;
  };
  
export default ThemeScreen;
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: colors.white_0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    }, 
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 0,
    bottom: 35,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white_1,
    bottom: 18,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  }, 
  tabbarIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  }, 
})